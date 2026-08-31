// src/app/privacy/page.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Tab Saint",
  description: "Tab Saint does not collect, transmit, sell, or share any of your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Privacy Policy</h1>
        <p className={styles.muted}>Last updated: 23 June 2026</p>

        <p className={styles.lead}>
          <strong>
            Short version: Tab Saint does not collect, transmit, sell, or
            share any of your data. Everything it stores stays on your own device.
          </strong>
        </p>

        <h2>What the extension stores</h2>
        <p>
          When you save a session, Tab Saint records the URLs and titles
          of your open tabs (and each window&apos;s grouping) so it can reopen
          them later. This data is written only to your browser&apos;s local
          extension storage (<code>chrome.storage.local</code>) on your own
          computer. It is never sent anywhere.
        </p>

        <h2>What we do NOT do</h2>
        <ul>
          <li>We do not run any server, and the extension makes no network requests.</li>
          <li>We do not use analytics, tracking, cookies, or advertising.</li>
          <li>We do not collect your name, email, IP address, or any identifier.</li>
          <li>We do not read your tabs at any time other than the moment you click &ldquo;Save&rdquo;.</li>
          <li>We do not share or sell anything to third parties (there are none).</li>
        </ul>

        <h2>Permissions, and why they&apos;re needed</h2>
        <ul>
          <li>
            <strong>tabs</strong> — to read the URLs and titles of your open
            tabs when you save a session, and to reopen them when you restore one.
          </li>
          <li>
            <strong>storage</strong> — to save your sessions locally in your
            browser so they persist between sessions.
          </li>
        </ul>
        <p>
          The extension requests no host permissions and does not run on or
          read the content of any web page.
        </p>

        <h2>Export &amp; import</h2>
        <p>
          You can export your saved sessions to a JSON file and import them
          back. These files are created and read entirely by you, on your
          device; the extension never uploads them.
        </p>

        <h2>Deleting your data</h2>
        <p>
          Delete individual sessions from the extension&apos;s popup at any
          time, or remove everything by uninstalling the extension — that
          clears all of its local storage.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:maximuspkr@gmail.com">maximuspkr@gmail.com</a>.
        </p>

        <h2>Changes</h2>
        <p>If this policy changes, the &ldquo;Last updated&rdquo; date above will change with it.</p>
      </main>
      <Footer />
    </>
  );
}
