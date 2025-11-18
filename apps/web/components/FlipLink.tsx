"use client";
import Link from "next/link";
import useFlipSound from "@hooks/useFlipSound";

export default function FlipLink(
  { href, className, children }:
  { href: string; className?: string; children: React.ReactNode }
) {
  const play = useFlipSound();
  return (
    <Link href={href} className={className} onClick={play}>
      {children}
    </Link>
  );
}
