// apps/web/components/FlipLink.tsx
"use client";

import Link from "next/link";
import useFlipSound from "@hooks/useFlipSound";
import type { ReactNode } from "react";

export default function FlipLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const playFlip = useFlipSound();

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        playFlip();
      }}
    >
      {children}
    </Link>
  );
}
