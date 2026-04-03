import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Parv Saxena | Senior Frontend Engineer — AI-Powered Products",
  description:
    "Senior Frontend Engineer with 5+ years building high-performance, AI-powered web experiences with React, TypeScript & Next.js.",
  keywords:
    "Senior Frontend Engineer, AI, RAG, OpenAI, React Developer, TypeScript, Next.js, Web Developer, Bengaluru, India",
  authors: [{ name: "Parv Saxena" }],
  openGraph: {
    title: "Parv Saxena | Senior Frontend Engineer — AI-Powered Products",
    description:
      "Senior Frontend Engineer with 5+ years building high-performance, AI-powered web experiences with React, TypeScript & Next.js.",
    type: "website",
    url: "https://parvsaxena.dev",
  },
  twitter: {
    card: "summary_large_image",
    site: "@parvsaxena",
  },
  metadataBase: new URL("https://parvsaxena.dev"),
  alternates: {
    canonical: "https://parvsaxena.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
