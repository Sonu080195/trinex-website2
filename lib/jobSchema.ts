// lib/jobSchema.ts

import type { Job } from "@/data/jobs";

const SITE_URL = "https://www.rudrongts.com";
const SITE_NAME = "RUDRON Global Talent Solutions";

/**
 * Converts plain text into safe HTML text for JSON-LD descriptions.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Parses salary strings such as:
 *
 * "$160K - $190K"
 * "$120,000 - $160,000"
 * "$95K"
 *
 * into numeric salary values.
 */
export function parseSalary(
  salary: string,
): { min: number; max: number } | null {
  if (!salary) {
    return null;
  }

  const matches = salary.match(/\$?\s*[\d,.]+(?:\.\d+)?\s*[Kk]?/g);

  if (!matches || matches.length === 0) {
    return null;
  }

  const numbers = matches
    .map((match) => {
      const normalized = match
        .replace(/\$/g, "")
        .replace(/,/g, "")
        .replace(/\s/g, "");

      const isThousands = /k$/i.test(normalized);

      const numericPart = normalized.replace(/k$/i, "");

      const value = Number.parseFloat(numericPart);

      if (!Number.isFinite(value)) {
        return null;
      }

      return isThousands ? value * 1000 : value;
    })
    .filter((value): value is number => value !== null);

  if (numbers.length === 0) {
    return null;
  }

  if (numbers.length === 1) {
    return {
      min: numbers[0],
      max: numbers[0],
    };
  }

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}

/**
 * Parses standard U.S. locations such as:
 *
 * "Portland, OR"
 * "Dallas, TX"
 * "Pittsburgh, PA"
 *
 * It also recognizes jobs explicitly containing the word "Remote".
 */
export function parseLocation(location: string): {
  city: string;
  state: string;
  isRemote: boolean;
} {
  const value = location?.trim() ?? "";

  const isRemote = /\bremote\b/i.test(value);

  const physicalLocation = value
    .replace(/\bremote\b\s*(?:or|\/|-)?\s*/gi, "")
    .trim();

  const parts = physicalLocation
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length >= 2) {
    return {
      city: parts[0],
      state: parts[1],
      isRemote,
    };
  }

  return {
    city: "",
    state: "",
    isRemote,
  };
}

/**
 * Maps the website's employment type to Google's supported
 * JobPosting employmentType values.
 */
export function mapEmploymentType(type: string): string {
  const normalized = type?.trim().toLowerCase() ?? "";

  if (
    normalized.includes("full time") ||
    normalized.includes("full-time") ||
    normalized === "fulltime"
  ) {
    return "FULL_TIME";
  }

  if (
    normalized.includes("part time") ||
    normalized.includes("part-time") ||
    normalized === "parttime"
  ) {
    return "PART_TIME";
  }

  if (
    normalized.includes("contract") ||
    normalized.includes("contractor")
  ) {
    return "CONTRACTOR";
  }

  if (
    normalized.includes("temporary") ||
    normalized.includes("temp")
  ) {
    return "TEMPORARY";
  }

  if (
    normalized.includes("internship") ||
    normalized.includes("intern")
  ) {
    return "INTERN";
  }

  if (normalized.includes("per diem")) {
    return "PER_DIEM";
  }

  if (normalized.includes("volunteer")) {
    return "VOLUNTEER";
  }

  return "OTHER";
}

/**
 * Validates and returns the original posting date.
 *
 * Google expects the employer's original posting date rather than
 * the date on which Google happens to crawl the page.
 */
function normalizeDatePosted(datePosted: string): string {
  const value = datePosted?.trim();

  if (!value) {
    return "";
  }

  const parsed = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toISOString().slice(0, 10);
}

/**
 * Creates the complete HTML description used in JobPosting JSON-LD.
 *
 * Google recommends that the description contain a meaningful
 * representation of the position rather than only a short summary.
 */
function buildDescriptionHtml(job: Job): string {
  const sections: string[] = [];

  if (job.description?.trim()) {
    sections.push(
      `<p>${escapeHtml(job.description.trim()).replace(/\n+/g, "<br />")}</p>`,
    );
  }

  if (job.responsibilities?.length) {
    const items = job.responsibilities
      .filter(Boolean)
      .map((responsibility) => `<li>${escapeHtml(responsibility)}</li>`)
      .join("");

    if (items) {
      sections.push(
        `<h2>Key Responsibilities</h2><ul>${items}</ul>`,
      );
    }
  }

  if (job.requirements?.length) {
    const items = job.requirements
      .filter(Boolean)
      .map((requirement) => `<li>${escapeHtml(requirement)}</li>`)
      .join("");

    if (items) {
      sections.push(
        `<h2>Requirements & Qualifications</h2><ul>${items}</ul>`,
      );
    }
  }

  if (job.benefits?.length) {
    const items = job.benefits
      .filter(Boolean)
      .map((benefit) => `<li>${escapeHtml(benefit)}</li>`)
      .join("");

    if (items) {
      sections.push(
        `<h2>Compensation & Benefits</h2><ul>${items}</ul>`,
      );
    }
  }

  return sections.join("");
}

/**
 * Builds ONE Google-compatible JobPosting schema for an
 * individual RUDRON job page.
 *
 * Important:
 * - Do not generate another JobPosting schema in JobDetailsClient.
 * - Do not put JobPosting schema on /jobs.
 * - Do not invent validThrough when an actual expiry date is unknown.
 */
export function buildJobPostingSchema(job: Job) {
  const canonicalUrl = `${SITE_URL}/jobs/${job.slug}`;

  const salary = parseSalary(job.salary);

  const { city, state, isRemote } = parseLocation(job.location);

  const datePosted = normalizeDatePosted(job.datePosted);

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${canonicalUrl}#jobposting`,

    title: job.title,

    description: buildDescriptionHtml(job),

    identifier: {
      "@type": "PropertyValue",
      name: SITE_NAME,
      value: String(job.id),
    },

    datePosted,

    employmentType: mapEmploymentType(job.type),

    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },

    url: canonicalUrl,

    directApply: true,

    industry: job.industry,
  };

  /**
   * Physical job location.
   *
   * We intentionally do NOT invent:
   * - streetAddress
   * - postalCode
   *
   * because the jobs data currently contains only city/state.
   */
  if (city && state) {
    schema.jobLocation = {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: state,
        addressCountry: "US",
      },
    };
  }

  /**
   * Only mark a role as TELECOMMUTE when the actual location data
   * explicitly identifies it as remote.
   */
  if (isRemote) {
    schema.jobLocationType = "TELECOMMUTE";

    schema.applicantLocationRequirements = {
      "@type": "Country",
      name: "USA",
    };
  }

  /**
   * Salary.
   *
   * The website currently stores annual salary ranges.
   * This therefore uses YEAR as the unit.
   */
  if (salary) {
    schema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        minValue: salary.min,
        maxValue: salary.max,
        unitText: "YEAR",
      },
    };
  }

  return schema;
}