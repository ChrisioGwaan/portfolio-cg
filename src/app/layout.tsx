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
  title: "Chrisio Gwaan — Software Engineer",
  description:
    "Personal portfolio of Chrisio Gwaan. Software engineer building AI-integrated full-stack applications, SaaS products, and Microsoft/Azure solutions.",
  metadataBase: new URL("https://chrisiogwaan.dev"),
  openGraph: {
    title: "Chrisio Gwaan — Software Engineer",
    description:
      "AI-integrated full-stack applications, SaaS products, and Microsoft/Azure solutions.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        {children}
      </body>
    </html>
  );
}
