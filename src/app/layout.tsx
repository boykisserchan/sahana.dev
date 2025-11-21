import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: ":3",
  description: ":3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
