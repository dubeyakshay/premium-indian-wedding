import type { Metadata } from "next";
import type { ReactNode } from "react";
import config from "@/data/wedding-config";
import "./globals.css";

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    images: [config.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: [config.seo.ogImage],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={config.settings.language || "en"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href={config.theme.fonts.googleFontsUrl}
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-wine-dark antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
