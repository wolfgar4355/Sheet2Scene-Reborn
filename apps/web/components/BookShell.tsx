// /var/www/prozip/s2s_full/apps/web/components/BookShell.tsx
"use client";
import * as React from "react";
import clsx from "clsx";

export function BookShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('/images/bg-hall.png')", // mets ton image (bibliothèque / bureau)
      }}
    >
      <div className="min-h-screen backdrop-blur-[1px] bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="relative grid gap-6 md:grid-cols-2">
            {/* Lutrin */}
            <div className="absolute inset-0 mx-auto md:mx-0 md:inset-y-10 md:left-[-48px] pointer-events-none">
              {/* Ombre / Lutrin décoratif si tu as un visuel */}
            </div>
            <div className={clsx("rounded-2xl bg-[#f5eddc] shadow-2xl p-6 md:p-8", "border border-amber-200")}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageLeft({ children }: { children: React.ReactNode }) {
  return <section className="md:pr-6 border-r md:border-amber-300">{children}</section>;
}
export function PageRight({ children }: { children: React.ReactNode }) {
  return <section className="md:pl-6">{children}</section>;
}
