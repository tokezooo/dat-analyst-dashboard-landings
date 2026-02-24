import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dat-analyst-dashboard landings",
  description: "Premium landing variants for dat-analyst-dashboard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
