// src/lib/guides.ts
// Central registry of published guides — the /guides index page and each
// guide's own metadata both read from here so the two never drift apart.

export type GuideMeta = {
  slug: string;
  title: string;
  dek: string;
  updated: string; // ISO date, human-readable in the UI
};

export const GUIDES: GuideMeta[] = [
  {
    slug: "recover-tabs-after-crash",
    title: "How to Recover Chrome Tabs After a Crash",
    dek: "Chrome's own crash recovery only works some of the time. Here's how to make sure it always does.",
    updated: "2026-08-31",
  },
  {
    slug: "manage-100-plus-tabs",
    title: "How to Manage 100+ Open Tabs in Chrome",
    dek: "Past a certain point, Chrome's tab strip stops being usable at all. What actually helps.",
    updated: "2026-08-31",
  },
  {
    slug: "session-saver-vs-alternatives",
    title: "Session Saver vs Session Buddy vs Tab Session Manager",
    dek: "An honest comparison of the three main Chrome session managers — no product on this page pays for its placement.",
    updated: "2026-08-31",
  },
];

export function getGuide(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
