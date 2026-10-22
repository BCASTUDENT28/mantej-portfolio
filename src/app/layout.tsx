import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandeep Mamidala — Video Editor & Motion Designer",
  description:
    "Portfolio of Sandeep Mamidala (S7 Films): performance reels, event films, political campaign reels, SaaS promos and motion design.",
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
