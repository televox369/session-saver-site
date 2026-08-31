// src/app/guides/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GUIDES } from "@/lib/guides";
import styles from "./guides.module.css";

export const metadata: Metadata = {
  title: "Guides — Session Saver",
  description:
    "Practical guides for managing Chrome tabs and windows: crash recovery, taming huge tab counts, and how session managers compare.",
};

export default function GuidesIndexPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Guides</h1>
        <p className={styles.subtitle}>
          Practical write-ups on managing Chrome tabs and windows — not just
          product pitches.
        </p>
        <div className={styles.list}>
          {GUIDES.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className={styles.card}>
              <h2>{g.title}</h2>
              <p>{g.dek}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
