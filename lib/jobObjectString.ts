// lib/jobObjectString.ts
// Shared by both the create and update admin routes so the exact same
// formatting logic is used in both places.

function esc(str: string): string {
  return (str || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function linesToArray(text: string): string {
  return (text || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => `    "${esc(line)}"`)
    .join(",\n");
}

export interface JobExtras {
  id: number;
  datePosted: string;
  featured?: boolean;
  urgent?: boolean;
  recruiter?: string;
  heroImage?: string;
}

export function buildJobObjectString(data: any, extras: JobExtras): string {
  return `  {
    id: ${extras.id},
    datePosted: "${extras.datePosted}",
    featured: ${extras.featured ? "true" : "false"},
    urgent: ${extras.urgent ? "true" : "false"},
    recruiter: "${esc(extras.recruiter || "RUDRON Executive Search")}",
    heroImage: "${esc(extras.heroImage || "/jobs/commercial-pm.webp")}",
    title: "${esc(data.title)}",
    company: "${esc(data.company)}",
    location: "${esc(data.location)}",
    salary: "${esc(data.salary)}",
    type: "${esc(data.type)}",
    industry: "${esc(data.industry)}",
    specialisation: "${esc(data.specialisation)}",
    slug: "${esc(data.slug)}",
    description: "${esc(data.description)}",
    responsibilities: [
${linesToArray(data.responsibilities)}
    ],
    requirements: [
${linesToArray(data.requirements)}
    ],
    benefits: [
${linesToArray(data.benefits)}
    ],
  },
`;
}