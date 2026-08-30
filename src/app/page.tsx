// src/app/page.tsx
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const FEATURES = [
  {
    title: "Save all windows",
    body: "One click snapshots every open window and tab as a named session.",
  },
  {
    title: "One-click restore",
    body: "Bring back a whole session's windows and tabs together, exactly as you left them.",
  },
  {
    title: "100% local",
    body: "No account, no server, no network requests. Your tabs never leave your device.",
  },
  {
    title: "Export & import",
    body: "Back up sessions to a JSON file, or move them to another computer.",
  },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <motion.section
          className={styles.hero}
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.title}>
            Save your tabs.<br />
            <span className={styles.gradText}>Get them back exactly as you left them.</span>
          </h1>
          <p className={styles.subtitle}>
            Session Saver snapshots every open window and tab, then restores
            them in one click. Free, no signup, nothing ever leaves your device.
          </p>
          <a href="#" data-pending="cws-listing" aria-disabled="true" className={styles.heroCta}>
            Add to Chrome — it&apos;s free
          </a>
        </motion.section>

        <motion.div
          className={styles.screenshotWrap}
          initial={reduceMotion ? undefined : { opacity: 0, y: 32 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/screenshots/screenshot-1-hero.png"
            alt="Session Saver popup showing saved sessions"
            width={1280}
            height={800}
            className={styles.screenshot}
          />
        </motion.div>

        <section className={styles.features}>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.card}
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </motion.div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
