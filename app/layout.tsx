import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyler Hand | Full-Stack Engineer",
  description:
    "Engineering high-performance full-stack systems with React, Express, .NET Core, and PostgreSQL. Focused on scalable architectures, type-safe APIs, and complex state management.",
  metadataBase: new URL("https://tylerhand.dev"),
  keywords: [
    "Tyler Hand",
    "Full-Stack Software Engineer",
    "Frontend Developer",
    "Express Backend Developer",
    "Local-first development",
    "Next.js Developer",
    "Type-safe API Design",
    "PostgreSQL Database Engineering",
    "React State Architectures",
    "Denver Software Engineer",
  ],
  authors: [{ name: "Tyler Hand" }],
  openGraph: {
    title: "Tyler Hand | Full-Stack Software Engineer",
    description:
      "Building high-performance web systems with React, Express, and .NET Core.",
    url: "https://tylerhand.dev",
    siteName: "Tyler Hand Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tyler Hand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Hand | Full-Stack Software Engineer",
    description:
      "Building high-performance web systems with React, Express, and .NET Core.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-svh flex flex-col">{children}</body>
    </html>
  );
}
