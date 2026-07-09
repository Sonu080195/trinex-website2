// lib/relativeTime.ts
// Converts a real ISO date into a live "X Days Ago" style string.
// This replaces hardcoded strings like "2 Days Ago" that never update.

export function getRelativeTime(isoDate: string): string {
  const posted = new Date(isoDate);
  const now = new Date();

  const diffMs = now.getTime() - posted.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "1 Day Ago";
  if (diffDays < 30) return `${diffDays} Days Ago`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return "1 Month Ago";
  if (diffMonths < 12) return `${diffMonths} Months Ago`;

  const diffYears = Math.floor(diffMonths / 12);
  return diffYears === 1 ? "1 Year Ago" : `${diffYears} Years Ago`;
}