import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mantej Singh — Founder, Builder & Creator",
  description:
    "Portfolio of Mantej Singh: tech vlogs, startup promos, high-retention reels, motion design, and digital brand films.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#05070a", color: "#dfe7e0", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
