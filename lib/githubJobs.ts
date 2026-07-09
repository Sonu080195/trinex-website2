// lib/githubJobs.ts
// Reads and updates data/jobs.ts directly in your GitHub repo via GitHub's
// REST API. Pushing to `main` this way triggers Vercel's existing
// auto-deploy — no separate deploy hook needed.

const GITHUB_API = "https://api.github.com";
const FILE_PATH = "data/jobs.ts";

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
 * Inserts a new job object (as a formatted string) right after the
 * `export const jobs: Job[] = [` line, then commits the change.
 */
export async function addJobToRepo(jobObjectString: string, commitMessage: string) {
  const { content, sha } = await getCurrentFile();

  const marker = "export const jobs: Job[] = [";
  const markerIndex = content.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error("Could not find the jobs array in data/jobs.ts — file structure may have changed.");
  }

  const insertAt = markerIndex + marker.length;
  const newContent =
    content.slice(0, insertAt) +
    "\n" +
    jobObjectString +
    content.slice(insertAt);

  await updateFile(newContent, sha, commitMessage);
}