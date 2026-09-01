type JobData = {
  title?: unknown;
  company?: unknown;
  location?: unknown;
  salary?: unknown;
  type?: unknown;
  industry?: unknown;
  specialisation?: unknown;
  slug?: unknown;
  description?: unknown;
  responsibilities?: unknown;
  requirements?: unknown;
  benefits?: unknown;
  recruiter?: unknown;
  heroImage?: unknown;
};

type JobMeta = {
  id: number;
  datePosted: string;
  featured?: boolean;
  urgent?: boolean;
  recruiter?: string;
  heroImage?: string;
};

/**
 * Converts any value into a safe trimmed string.
 */
function cleanString(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).trim();
}

/**
 * Converts textarea input into a clean string array.
 *
 * Each non-empty line becomes one array item.
 */
function textareaToArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => cleanString(item))
      .filter(Boolean);
  }

  return cleanString(value)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

/**
 * Safely serializes a JavaScript string.
 *
 * JSON.stringify automatically protects:
 * - quotation marks
 * - backslashes
 * - apostrophes
 * - line breaks
 * - tabs
 * - special characters
 */
function safeString(value: unknown): string {
  return JSON.stringify(cleanString(value));
}

/**
 * Formats an array as valid TypeScript/JavaScript.
 */
function safeArray(value: unknown): string {
  const items = textareaToArray(value);

  if (items.length === 0) {
    return "[]";
  }

  return `[
${items.map((item) => `      ${JSON.stringify(item)}`).join(",\n")}
    ]`;
}

/**
 * Builds a complete, safe Job object that can be inserted
 * directly into data/jobs.ts.
 */
export function buildJobObjectString(
  data: JobData,
  meta: JobMeta
): string {
  const recruiter =
    cleanString(meta.recruiter) ||
    cleanString(data.recruiter) ||
    "RUDRON Executive Search";

  const heroImage =
    cleanString(meta.heroImage) ||
    cleanString(data.heroImage) ||
    "/jobs/commercial-pm.webp";

  return `  {
    id: ${Number(meta.id)},
    datePosted: ${safeString(meta.datePosted)},
    featured: ${Boolean(meta.featured)},
    urgent: ${Boolean(meta.urgent)},
    recruiter: ${safeString(recruiter)},
    heroImage: ${safeString(heroImage)},
    title: ${safeString(data.title)},
    company: ${safeString(data.company)},
    location: ${safeString(data.location)},
    salary: ${safeString(data.salary)},
    type: ${safeString(data.type)},
    industry: ${safeString(data.industry)},
    specialisation: ${safeString(data.specialisation)},
    slug: ${safeString(data.slug)},
    description: ${safeString(data.description)},
    responsibilities: ${safeArray(data.responsibilities)},
    requirements: ${safeArray(data.requirements)},
    benefits: ${safeArray(data.benefits)},
  }`;
}