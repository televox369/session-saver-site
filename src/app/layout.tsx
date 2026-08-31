import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://tabsaint.app"; // placeholder domain until a real one is chosen

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tab Saint — Save & Restore Chrome Tabs",
  description:
    "Save all your open windows and tabs as a named session, then restore them in one click. 100% local — nothing leaves your device.",
  openGraph: {
    title: "Tab Saint — Save & Restore Chrome Tabs",
    description:
      "Save all your open windows and tabs as a named session, then restore them in one click. 100% local — nothing leaves your device.",
    url: siteUrl,
    siteName: "Tab Saint",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tab Saint",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Save all your open Chrome windows and tabs as a named session, then restore them in one click. 100% local, no account, no network requests.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="grain" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
