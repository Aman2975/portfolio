import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amandeep Singh — Backend Developer",
  description:
    "Backend Developer & MCA Student from Mohali, Punjab. Building scalable APIs with Node.js, Express.js, MySQL & MongoDB. Open to internships and jobs in Mohali & Chandigarh.",
  keywords: [
    "Amandeep Singh",
    "Backend Developer",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "MCA",
    "Mohali",
    "Chandigarh",
    "Portfolio",
  ],
  authors: [{ name: "Amandeep Singh" }],
  creator: "Amandeep Singh",
  openGraph: {
    title: "Amandeep Singh — Backend Developer",
    description:
      "Backend Developer & MCA Student building scalable APIs and real-world systems.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amandeep Singh — Backend Developer",
    description:
      "Backend Developer & MCA Student building scalable APIs and real-world systems.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
