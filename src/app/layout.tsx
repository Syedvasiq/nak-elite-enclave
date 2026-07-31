import type { Metadata } from "next";
import FloatingContact from "@/components/FloatingContact";
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
  title: "NAK Elite Enclave | Premium Plots in Shivamogga",
  description: "NAK Elite Enclave — Premium residential plots on Matturu Road, Shivamogga. Gated community with landscaped parks, wide roads & modern amenities.",
  metadataBase: new URL("https://nak-elite-enclave.vercel.app"),
  openGraph: {
    title: "NAK Elite Enclave | Premium Plots in Shivamogga",
    description: "Premium residential plots on Matturu Road, Shivamogga. Gated community with landscaped parks, wide roads & modern amenities.",
    url: "https://nak-elite-enclave.vercel.app",
    siteName: "NAK Elite Enclave",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "NAK Elite Enclave — Premium Plots in Shivamogga",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAK Elite Enclave | Premium Plots in Shivamogga",
    description: "Premium residential plots on Matturu Road, Shivamogga.",
    images: ["/hero-bg.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
      <body className="min-h-full flex flex-col">{children}<FloatingContact /></body>
    </html>
  );
}
