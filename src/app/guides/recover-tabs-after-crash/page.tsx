// src/app/guides/recover-tabs-after-crash/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGuide } from "@/lib/guides";
import styles from "../guide.module.css";

const guide = getGuide("recover-tabs-after-crash")!;

export const metadata: Metadata = {
  title: `${guide.title} — Tab Saint`,
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
          Chrome crashes, and windows updates force a restart, more often
          than most people notice — until it happens with thirty tabs open
          and no memory of half of them. Here&apos;s what actually recovers
          your tabs, and what doesn&apos;t.
        </p>

        <h2>What Chrome does on its own</h2>
        <p>
          Chrome has a built-in &ldquo;Continue where you left off&rdquo;
          setting (<code>Settings → On startup</code>). When it&apos;s
          enabled and Chrome exits cleanly, it reopens your last windows and
          tabs. The problem is the exceptions:
        </p>
        <ul>
          <li>
            A hard crash, a forced OS shutdown, or Chrome getting killed by
            Task Manager can leave the session file in a state Chrome
            doesn&apos;t trust enough to restore from.
          </li>
          <li>
            If you ever quit Chrome normally in between (even once), the
            &ldquo;last session&rdquo; is overwritten — the crashed session
            you actually wanted is gone.
          </li>
          <li>
            Incognito windows are never saved, by design.
          </li>
          <li>
            Chrome only remembers <em>one</em> previous session. If you
            wanted last Tuesday&apos;s research tabs, not last night&apos;s,
            there&apos;s nothing to recover from.
          </li>
        </ul>

        <div className={styles.callout}>
          <p>
            <strong>The real fix isn&apos;t better crash recovery — it&apos;s not
            depending on crash recovery at all.</strong> Save the tabs you care
            about as a named session before you need them back, the same way
            you&apos;d save a document.
          </p>
        </div>

        <h2>How to do that</h2>
        <ol>
          <li>
            Get in the habit of saving a session whenever you close a batch
            of tabs you might want again — research, a half-finished
            purchase, an open ticket, a reading list.
          </li>
          <li>
            Give the session a name you&apos;ll recognize later, not
            &ldquo;Session 1&rdquo;. &ldquo;Tax docs — Aug 2026&rdquo; beats
            a timestamp every time.
          </li>
          <li>
            If it matters, export it. A named session saved to your
            browser&apos;s local storage survives a crash; it does not
            survive a wiped profile or a fresh install. A JSON export does.
          </li>
        </ol>

        <h2>Where Tab Saint fits</h2>
        <p>
          <Link href="/">Tab Saint</Link> does exactly the three steps
          above in one click: save every open window and tab as a named
          session, restore it later exactly as it was, and export/import as
          JSON for backup. It runs entirely in your browser&apos;s local
          storage — no account, no server, no data leaving your device — so
          there&apos;s nothing to configure and nothing to trust beyond
          Chrome itself.
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
