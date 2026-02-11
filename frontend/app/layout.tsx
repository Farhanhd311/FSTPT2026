import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FSTPT 2026 — Forum Studi Transportasi antar Perguruan Tinggi",
  description:
    "5th ISTSDC & 29th Symposium Nasional FSTPT — Advancing Sustainable Mobility Solutions for Resilient and Inclusive Future. Hosted by Universitas Andalas.",
  keywords: [
    "FSTPT",
    "ISTSDC",
    "transportation",
    "symposium",
    "sustainable mobility",
    "Indonesia",
    "Universitas Andalas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
