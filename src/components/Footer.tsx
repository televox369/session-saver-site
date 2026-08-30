// src/components/Footer.tsx
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Session Saver — 100% local, no account, no tracking.</p>
      <nav className={styles.links}>
        <Link href="/privacy">Privacy Policy</Link>
        <a href="mailto:maximuspkr@gmail.com">Contact</a>
      </nav>
    </footer>
  );
}
