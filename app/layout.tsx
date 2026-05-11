import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growth Metric Correlator — Find What Actually Drives Retention",
  description: "Connects to your analytics tools and surfaces non-obvious correlations between user actions and growth metrics like retention, conversion, and revenue."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="775ddbed-9499-47d1-a955-2f30036667f2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
