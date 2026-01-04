import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Financial Governance Self-Assessment Tool",
  description: "Evaluate your organization's financial governance maturity through a structured assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

