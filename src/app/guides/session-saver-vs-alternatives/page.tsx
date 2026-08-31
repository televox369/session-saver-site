// src/app/guides/session-saver-vs-alternatives/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGuide } from "@/lib/guides";
import styles from "../guide.module.css";

const guide = getGuide("session-saver-vs-alternatives")!;

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
          We built Session Saver, so take the framing with that in mind —
          but the numbers below are pulled straight from each
          listing&apos;s own public Chrome Web Store page, not from us.
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Extension</th>
                <th>Users</th>
                <th>Rating</th>
                <th>Ratings</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Session Buddy</td>
                <td>900K</td>
                <td>4.7★</td>
                <td>25.1K</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Tab Session Manager</td>
                <td>100K</td>
                <td>3.5★</td>
                <td>442</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>FreshStart</td>
                <td>50K</td>
                <td>4.4★</td>
                <td>816</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Session Saver</td>
                <td>New</td>
                <td>No reviews yet</td>
                <td>—</td>
                <td>Free</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={styles.footnote}>
          All four are currently 100% free with no paid tier — this is a
          category where nobody is charging yet, Session Buddy included.
        </p>

        <h2>Session Buddy — the category leader</h2>
        <p>
          By user count and rating, Session Buddy is the extension to beat:
          900K users and a 4.7★ average across 25K+ ratings is a real,
          earned track record, not a fluke. It&apos;s a mature, feature-rich
          tool. If you want tagging, search across saved sessions, and a
          long history of stability, it&apos;s a reasonable default choice
          and we won&apos;t pretend otherwise.
        </p>

        <h2>Tab Session Manager</h2>
        <p>
          Second by install count, but its 3.5★ average and unusually low
          rating rate (well under 1% of its 100K users have left a review,
          versus over 2.5% for Session Buddy) both suggest a rougher
          day-to-day experience than the install count alone implies.
          Worth checking recent reviews before installing.
        </p>

        <h2>FreshStart</h2>
        <p>
          Smaller (50K users) but a solid 4.4★ rating with a healthier
          review rate than Tab Session Manager&apos;s. A reasonable
          alternative if Session Buddy feels heavier than you need.
        </p>

        <h2>Where Session Saver is different</h2>
        <p>
          Honestly: it&apos;s new, and it doesn&apos;t have a review history
          yet — that&apos;s not a claim we can make up. What it does have is
          a narrower scope than any of the three above, on purpose:
        </p>
        <ul>
          <li>
            <strong>Two permissions, full stop.</strong>{" "}
            <code>tabs</code> and <code>storage</code> — no host
            permissions, no ability to read the content of any page you
            visit.
          </li>
          <li>
            <strong>No network code at all.</strong> Not &ldquo;we don&apos;t
            send your data&rdquo; as a policy promise — there is no network
            request anywhere in the extension to send it with.
          </li>
          <li>
            <strong>Save, restore, export, import. Nothing else.</strong> No
            tagging, no built-in search, no sync. If you want the
            fuller-featured tool, Session Buddy is genuinely the better
            pick for that.
          </li>
        </ul>
        <p>
          If what you actually want is a small, auditable tool that saves
          and restores sessions and does nothing else, that&apos;s the whole
          pitch. If you want more, the other three on this page are worth
          your time too.
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
