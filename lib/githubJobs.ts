// lib/githubJobs.ts
//
// Reads and updates data/jobs.ts directly in the GitHub repository.
// Changes committed to the configured branch automatically trigger Vercel.

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

  return {
    token,
    owner,
    repo,
    branch,
  };
}

async function githubFetch(
  url: string,
  options: RequestInit = {}
) {
  const { token } = getConfig();

  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text();

    throw new Error(
      `GitHub API error (${res.status}): ${body}`
    );
  }

  return res.json();
}

/**
 * Fetches the latest data/jobs.ts from GitHub together with its SHA.
 * GitHub requires the SHA when updating an existing file.
 */
async function getCurrentFile(): Promise<{
  content: string;
  sha: string;
}> {
  const { owner, repo, branch } = getConfig();

  const url =
    `${GITHUB_API}/repos/${owner}/${repo}/contents/${FILE_PATH}` +
    `?ref=${encodeURIComponent(branch)}`;

  const data = await githubFetch(url);

  if (!data.content || !data.sha) {
    throw new Error(
      "GitHub returned an invalid response for data/jobs.ts."
    );
  }

  const content = Buffer.from(
    data.content,
    "base64"
  ).toString("utf-8");

  return {
    content,
    sha: data.sha,
  };
}

/**
 * Commits the updated jobs.ts file to GitHub.
 */
async function updateFile(
  newContent: string,
  sha: string,
  commitMessage: string
) {
  const { owner, repo, branch } = getConfig();

  const url =
    `${GITHUB_API}/repos/${owner}/${repo}/contents/${FILE_PATH}`;

  await githubFetch(url, {
    method: "PUT",

    body: JSON.stringify({
      message: commitMessage,
      content: Buffer.from(
        newContent,
        "utf-8"
      ).toString("base64"),
      sha,
      branch,
    }),
  });
}

/**
 * Finds the beginning of the jobs array.
 */
function getJobsArrayStart(content: string): number {
  const markerIndex = content.indexOf(ARRAY_MARKER);

  if (markerIndex === -1) {
    throw new Error(
      "Could not find the jobs array in data/jobs.ts. " +
        "The expected marker is missing."
    );
  }

  return markerIndex + ARRAY_MARKER.length;
}

/**
 * Finds the exact character range occupied by a job object.
 *
 * The parser counts braces while ignoring braces occurring inside
 * JavaScript/TypeScript strings.
 */
function findJobBlockRange(
  content: string,
  id: number
): {
  start: number;
  end: number;
} | null {
  const arrayStart = getJobsArrayStart(content);

  let i = arrayStart;
  const len = content.length;

  while (i < len) {
    // Skip whitespace and commas separating job objects.
    while (
      i < len &&
      /[\s,]/.test(content[i])
    ) {
      i++;
    }

    // Reached the end of the jobs array.
    if (content[i] === "]") {
      break;
    }

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
        if (escaped) {
          escaped = false;
        } else if (ch === "\\") {
          escaped = true;
        } else if (ch === inString) {
          inString = null;
        }

        continue;
      }

      if (
        ch === '"' ||
        ch === "'" ||
        ch === "`"
      ) {
        inString = ch;
        continue;
      }

      if (ch === "{") {
        depth++;
      } else if (ch === "}") {
        depth--;

        if (depth === 0) {
          i++;
          break;
        }
      }
    }

    const blockEnd = i;
    const blockText = content.slice(
      blockStart,
      blockEnd
    );

    const idMatch = blockText.match(
      /\bid:\s*(\d+)/
    );

    if (
      idMatch &&
      Number(idMatch[1]) === Number(id)
    ) {
      return {
        start: blockStart,
        end: blockEnd,
      };
    }
  }

  return null;
}

/**
 * Looks at what comes after a job object and determines whether
 * the object needs a trailing comma.
 */
function needsTrailingComma(
  content: string,
  position: number
): boolean {
  let i = position;

  while (
    i < content.length &&
    /\s/.test(content[i])
  ) {
    i++;
  }

  // If another object follows, the current object needs a comma.
  if (content[i] === "{") {
    return true;
  }

  // If an existing comma already follows, don't duplicate it.
  if (content[i] === ",") {
    return false;
  }

  // At the end of the array a trailing comma is still safe and
  // keeps formatting consistent.
  if (content[i] === "]") {
    return true;
  }

  return true;
}

/**
 * Inserts a new job at the top of the jobs array.
 */
export async function addJobToRepo(
  jobObjectString: string,
  commitMessage: string
) {
  const { content, sha } =
    await getCurrentFile();

  const insertAt =
    getJobsArrayStart(content);

  const before = content.slice(
    0,
    insertAt
  );

  const after = content.slice(insertAt);

  /*
   * CRITICAL:
   * Every inserted job object receives a comma.
   *
   * Without this the generated file becomes:
   *
   *   }
   *   {
   *
   * instead of:
   *
   *   },
   *   {
   */
  const newContent =
    `${before}\n${jobObjectString},${after}`;

  await updateFile(
    newContent,
    sha,
    commitMessage
  );
}

/**
 * Replaces an existing job while preserving correct array separators.
 */
export async function updateJobInRepo(
  id: number,
  newJobObjectString: string,
  commitMessage: string
) {
  const { content, sha } =
    await getCurrentFile();

  const range = findJobBlockRange(
    content,
    id
  );

  if (!range) {
    throw new Error(
      `Job with id ${id} was not found in data/jobs.ts.`
    );
  }

  const before = content.slice(
    0,
    range.start
  );

  const after = content.slice(
    range.end
  );

  const comma =
    needsTrailingComma(
      content,
      range.end
    )
      ? ","
      : "";

  const newContent =
    before +
    newJobObjectString +
    comma +
    after;

  await updateFile(
    newContent,
    sha,
    commitMessage
  );
}

/**
 * Deletes a job and safely cleans up its separator.
 */
export async function deleteJobFromRepo(
  id: number,
  commitMessage: string
) {
  const { content, sha } =
    await getCurrentFile();

  const range = findJobBlockRange(
    content,
    id
  );

  if (!range) {
    throw new Error(
      `Job with id ${id} was not found in data/jobs.ts.`
    );
  }

  let deleteEnd = range.end;

  /*
   * Remove whitespace immediately following the job.
   */
  while (
    deleteEnd < content.length &&
    /\s/.test(content[deleteEnd])
  ) {
    deleteEnd++;
  }

  /*
   * If the deleted job owns a trailing comma, remove it too.
   */
  if (content[deleteEnd] === ",") {
    deleteEnd++;

    while (
      deleteEnd < content.length &&
      (
        content[deleteEnd] === " " ||
        content[deleteEnd] === "\t"
      )
    ) {
      deleteEnd++;
    }

    if (
      content[deleteEnd] === "\r" &&
      content[deleteEnd + 1] === "\n"
    ) {
      deleteEnd += 2;
    } else if (
      content[deleteEnd] === "\n"
    ) {
      deleteEnd++;
    }
  }

  const newContent =
    content.slice(0, range.start) +
    content.slice(deleteEnd);

  await updateFile(
    newContent,
    sha,
    commitMessage
  );
}