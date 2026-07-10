// lib/githubJobs.ts
// Reads and updates data/jobs.ts directly in your GitHub repo via GitHub's
// REST API. Pushing to `main` this way triggers Vercel's existing
// auto-deploy — no separate deploy hook needed.

const GITHUB_API = "https://api.github.com";
const FILE_PATH = "data/jobs.ts";
const ARRAY_MARKER = "export const jobs: Job[] = [";

function getConfig() {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";

  if (!token || !owner || !repo) {
    throw new Error(
      "Missing GITHUB_TOKEN, GITHUB_OWNER, or GITHUB_REPO environment variables."
    );
  }

  return { token, owner, repo, branch };
}

async function githubFetch(url: string, options: RequestInit = {}) {
  const { token } = getConfig();
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API error (${res.status}): ${body}`);
  }

  return res.json();
}

/** Fetches the current data/jobs.ts content and its SHA (needed to update it). */
async function getCurrentFile(): Promise<{ content: string; sha: string }> {
  const { owner, repo, branch } = getConfig();
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${FILE_PATH}?ref=${branch}`;
  const data = await githubFetch(url);
  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return { content, sha: data.sha };
}

/** Commits updated file content back to the repo. */
async function updateFile(newContent: string, sha: string, commitMessage: string) {
  const { owner, repo, branch } = getConfig();
  const url = `${GITHUB_API}/repos/${owner}/${repo}/contents/${FILE_PATH}`;

  await githubFetch(url, {
    method: "PUT",
    body: JSON.stringify({
      message: commitMessage,
      content: Buffer.from(newContent, "utf-8").toString("base64"),
      sha,
      branch,
    }),
  });
}

/**
 * Scans the jobs array text and finds the exact character range of the
 * job object whose `id:` field matches. Uses brace-depth counting (and
 * skips braces inside string literals) so it works regardless of each
 * job's internal formatting/indentation.
 */
function findJobBlockRange(content: string, id: number): { start: number; end: number } | null {
  const markerIndex = content.indexOf(ARRAY_MARKER);
  if (markerIndex === -1) {
    throw new Error("Could not find the jobs array in data/jobs.ts — file structure may have changed.");
  }

  let i = markerIndex + ARRAY_MARKER.length;
  const len = content.length;

  while (i < len) {
    while (i < len && /[\s,]/.test(content[i])) i++;
    if (content[i] === "]") break;
    if (content[i] !== "{") {
      i++;
      continue;
    }

    const blockStart = i;
    let depth = 0;
    let inString: string | null = null;
    let escaped = false;

    for (; i < len; i++) {
      const ch = content[i];
      if (inString) {
        if (escaped) escaped = false;
        else if (ch === "\\") escaped = true;
        else if (ch === inString) inString = null;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === "`") {
        inString = ch;
        continue;
      }
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
      }
    }

    const blockEnd = i;
    const blockText = content.slice(blockStart, blockEnd);
    const idMatch = blockText.match(/id:\s*(\d+)/);

    if (idMatch && parseInt(idMatch[1], 10) === id) {
      let end = blockEnd;
      while (content[end] === "," || content[end] === " ") end++;
      if (content[end] === "\n") end++;
      return { start: blockStart, end };
    }
  }

  return null;
}

/**
 * Inserts a new job object (as a formatted string) right after the
 * `export const jobs: Job[] = [` line, then commits the change.
 */
export async function addJobToRepo(jobObjectString: string, commitMessage: string) {
  const { content, sha } = await getCurrentFile();

  const markerIndex = content.indexOf(ARRAY_MARKER);
  if (markerIndex === -1) {
    throw new Error("Could not find the jobs array in data/jobs.ts — file structure may have changed.");
  }

  const insertAt = markerIndex + ARRAY_MARKER.length;
  const newContent =
    content.slice(0, insertAt) + "\n" + jobObjectString + content.slice(insertAt);

  await updateFile(newContent, sha, commitMessage);
}

/** Replaces an existing job (matched by id) with a new object string. */
export async function updateJobInRepo(id: number, newJobObjectString: string, commitMessage: string) {
  const { content, sha } = await getCurrentFile();
  const range = findJobBlockRange(content, id);

  if (!range) {
    throw new Error(`Job with id ${id} not found in repo file.`);
  }

  const newContent =
    content.slice(0, range.start) + newJobObjectString + content.slice(range.end);

  await updateFile(newContent, sha, commitMessage);
}

/** Removes an existing job (matched by id) entirely. */
export async function deleteJobFromRepo(id: number, commitMessage: string) {
  const { content, sha } = await getCurrentFile();
  const range = findJobBlockRange(content, id);

  if (!range) {
    throw new Error(`Job with id ${id} not found in repo file.`);
  }

  const newContent = content.slice(0, range.start) + content.slice(range.end);

  await updateFile(newContent, sha, commitMessage);
}