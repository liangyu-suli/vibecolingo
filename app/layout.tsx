import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "vibecolingo Investor Demo",
  description: "Interactive investor demo for vibecolingo"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
