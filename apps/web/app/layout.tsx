// apps/web/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";

import AudioBoot from "@lib/mithril/AudioBoot";
import { MithrilProvider } from "@lib/mithril/engine";

export const metadata: Metadata = {
  title: "Sheet2Scene",
  description: "Transformez vos feuilles en scènes jouables.",
  manifest: "manifest.json",
  appleWebApp: {
    capable: true,
    title: "Sheet2Scene",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icons/icon-maskable-512.png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5e34",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preload" as="image" href="/images/bg-hall.png" />
        <link rel="preload" as="image" href="/images/lectern.png" />
        <link rel="preload" as="image" href="/images/grimoire-closed-clear.png" />
        <link rel="preload" as="image" href="/images/parchment.png" />
      </head>

      <body className="min-h-screen antialiased">
        {/* Préchargement audio client */}
        <AudioBoot />

        {/* 👉 IMPORTANT : Fournit toutes les animations et le moteur UI */}
        <MithrilProvider>{children}</MithrilProvider>

        {/* Portail modal */}
        <div id="modal-root" />
      </body>
    </html>
  );
}
