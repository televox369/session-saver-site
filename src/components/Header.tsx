// src/components/Header.tsx
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <span className={styles.logoDot} />
        Session Saver
      </Link>
      <nav className={styles.nav}>
        <Link href="/privacy">Privacy</Link>
        <a
          href="#"
          data-pending="cws-listing"
          className={styles.cta}
        >
          Add to Chrome
        </a>
      </nav>
    </header>
  );
}
