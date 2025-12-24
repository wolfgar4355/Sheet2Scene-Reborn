// apps/web/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import FireAudio from "@components/FireAudio";

import { MithrilProvider } from "@lib/engine";
// ou si AudioBoot est UI → le déplacer dans components/
import BookAnimation from "@components/BookAnimation"; // ← AJOUT

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
    other: [{ rel: "mask-icon", url: "/icons/icon-maskable-512.png" }],
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
        {/* Préchargement d’images essentielles */}
        <link rel="preload" as="image" href="/images/bg-hall.png" />
        <link rel="preload" as="image" href="/images/lectern.png" />
        <link rel="preload" as="image" href="/images/grimoire-closed-clear.png" />
        <link rel="preload" as="image" href="/images/parchment.png" />
      </head>

      <body className="min-h-screen antialiased">
        {/* Préchargement audio */}
        <AudioBoot />

        {/* 🔥 Ambiance feu de foyer */}
        <FireAudio />

        {/* 🌫️ Fumée douce depuis le foyer */}
        <div className="fire-smoke-layer">
          <div className="fire-smoke"></div>
        </div>

        {/* 🔥 SUPER IMPORTANT : Overlay global pour animations du grimoire */}
        <BookAnimation />

        {/* 🔮 Noyau du Mithril Engine */}
        <MithrilProvider>
          {children}
        </MithrilProvider>

        {/* Portail modal */}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
