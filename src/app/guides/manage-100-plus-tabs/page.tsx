// src/app/guides/manage-100-plus-tabs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGuide } from "@/lib/guides";
import styles from "../guide.module.css";

const guide = getGuide("manage-100-plus-tabs")!;

export const metadata: Metadata = {
  title: `${guide.title} — Session Saver`,
  description: guide.dek,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.title,
  description: guide.dek,
  dateModified: guide.updated,
};

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className={styles.eyebrow}>
          <Link href="/guides">Guides</Link>
        </p>
        <h1>{guide.title}</h1>
        <p className={styles.muted}>Updated {guide.updated}</p>

        <p className={styles.lead}>
          Somewhere past a hundred tabs, Chrome&apos;s tab strip stops being
          a tab strip and starts being a thin colored line you can no longer
          read. Here&apos;s what&apos;s actually going on, and what helps.
        </p>

        <h2>Why the tab strip breaks down</h2>
        <p>
          Chrome keeps shrinking each tab as you open more, down to a
          favicon-sized sliver with no title text. Past roughly a hundred
          tabs it&apos;s effectively unusable for finding anything by
          looking — you&apos;re reduced to hovering one at a time. This
          isn&apos;t a bug so much as a UI that was never designed for the
          count some workflows push it to.
        </p>

        <h2>What helps, roughly in order of effort</h2>

        <h3>1. Tab search</h3>
        <p>
          Chrome has a built-in tab search (the small ⌄ chevron at the top
          right of the tab strip, or <code>Ctrl+Shift+A</code>). It searches
          titles and URLs across every open tab. It doesn&apos;t reduce the
          count, but it makes finding one tab out of two hundred fast.
        </p>

        <h3>2. Tab groups</h3>
        <p>
          Right-click a tab → &ldquo;Add tab to new group&rdquo;. Groups
          collapse to a single colored label, which is the closest thing
          Chrome has to folders for tabs. Good for splitting &ldquo;work,
          reading, shopping&rdquo; apart, but the grouping doesn&apos;t
          survive a crash any better than ungrouped tabs do — see our{" "}
          <Link href="/guides/recover-tabs-after-crash">
            crash recovery guide
          </Link>
          .
        </p>

        <h3>3. Stop treating open tabs as your to-do list</h3>
        <p>
          The count creeps up because closing a tab feels like losing it.
          The actual fix for that isn&apos;t a better tab strip — it&apos;s
          somewhere to put tabs down that isn&apos;t &ldquo;still
          open.&rdquo; Save a batch as a named session, close them, and the
          open-tab count (and the memory Chrome is holding for all of them)
          drops immediately without losing anything.
        </p>

        <div className={styles.callout}>
          <p>
            Session Saver does step 3 in one click — save every open window
            and tab as a named session, close what you don&apos;t need open
            right now, and restore the whole batch later exactly as it was.
          </p>
        </div>

        <h2>What Session Saver doesn&apos;t do</h2>
        <p>
          To be direct about scope: Session Saver is a popup-only extension
          that reads and restores your open tabs — it doesn&apos;t change
          how Chrome&apos;s own tab strip renders, and it doesn&apos;t run
          in the background monitoring your tab count. If your tab strip is
          already so overloaded that Chrome itself has started clamping how
          many it will even display, that&apos;s a deeper Chrome limitation
          no popup extension reaches into — the fix there is the same
          principle at a heavier tool: get tabs out of &ldquo;open&rdquo;
          and into a named, restorable session before the count gets that
          high, rather than after.
        </p>

        <div className={styles.ctaBlock}>
          <a
            href="#"
            data-pending="cws-listing"
            aria-disabled="true"
            className={styles.cta}
          >
            Add to Chrome
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
