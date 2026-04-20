import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhaval Prajapati — Sr. Quality Analyst",
  description: "8+ years of experience in quality assurance, manual testing, API testing, and software QA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
