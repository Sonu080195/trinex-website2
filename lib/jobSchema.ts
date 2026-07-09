// lib/jobSchema.ts
// Converts your existing free-text job fields (salary, location, postedDate)
// into the structured values Google's JobPosting schema requires.

import { Job } from "@/data/jobs";

/**
 * Parses "$160K - $190K" → { min: 160000, max: 190000 }
 * Falls back to a single value if only one number is found.
 */
export function parseSalary(salary: string): { min: number; max: number } | null {
  const matches = salary.match(/[\d.]+K?/gi);
  if (!matches || matches.length === 0) return null;

  const toNumber = (s: string) => {
    const isK = /K$/i.test(s);
    const num = parseFloat(s.replace(/K$/i, ""));
    return isK ? num * 1000 : num;
  };

  const nums = matches.map(toNumber);
  if (nums.length === 1) return { min: nums[0], max: nums[0] };
  return { min: Math.min(...nums), max: Math.max(...nums) };
}

/**
 * Parses "Dallas, TX" → { city: "Dallas", state: "TX" }
 * Handles "Remote or Atlanta, GA" by extracting the real location part.
 * Falls back gracefully for anything unexpected.
 */
export function parseLocation(location: string): { city: string; state: string; isRemote: boolean } {
  const isRemote = /remote/i.test(location);
  // Strip "Remote or " / "Remote/" prefixes, keep the physical location if present
  const cleaned = location.replace(/remote\s*(or|\/)?\s*/i, "").trim();
  const parts = cleaned.split(",").map((p) => p.trim()).filter(Boolean);

  if (parts.length >= 2) {
    return { city: parts[0], state: parts[1], isRemote };
  }
  // No physical location left (pure remote) — city/state omitted, isRemote flags it
  return { city: "", state: "", isRemote };
}

/** Maps your `type` field to Google's expected enum values. */
export function mapEmploymentType(type: string): string {
  const t = type.toLowerCase();
  if (t.includes("contract")) return "CONTRACTOR";
  if (t.includes("part")) return "PART_TIME";
  if (t.includes("temp")) return "TEMPORARY";
  if (t.includes("intern")) return "INTERN";
  return "FULL_TIME";
}

/** Builds the full JobPosting JSON-LD object for a given job. */
export function buildJobPostingSchema(job: Job) {
  const salary = parseSalary(job.salary);
  const { city, state, isRemote } = parseLocation(job.location);
  const datePosted = new Date(job.datePosted).toISOString();

  // validThrough: Google recommends an expiry; we default to 45 days out
  // since these listings don't currently store an explicit close date.
  const validThrough = new Date(datePosted);
  validThrough.setDate(validThrough.getDate() + 45);

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: buildDescriptionHtml(job),
    identifier: {
      "@type": "PropertyValue",
      name: "RUDRON",
      value: String(job.id),
    },
    datePosted,
    validThrough: validThrough.toISOString(),
    employmentType: mapEmploymentType(job.type),
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
      sameAs: "https://www.rudrongts.com",
    },
    directApply: true,
    industry: job.industry,
  };

  if (isRemote && !city) {
    schema.jobLocationType = "TELECOMMUTE";
    schema.applicantLocationRequirements = {
      "@type": "Country",
      name: "US",
    };
  } else if (city && state) {
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

/** Combines description + responsibilities + requirements into one HTML block, as Google prefers a fuller description field. */
function buildDescriptionHtml(job: Job): string {
  let html = `<p>${job.description}</p>`;

  if (job.responsibilities?.length) {
    html += `<p><strong>Responsibilities:</strong></p><ul>${job.responsibilities
      .map((r) => `<li>${r}</li>`)
      .join("")}</ul>`;
  }

  if (job.requirements?.length) {
    html += `<p><strong>Requirements:</strong></p><ul>${job.requirements
      .map((r) => `<li>${r}</li>`)
      .join("")}</ul>`;
  }

  return html;
}