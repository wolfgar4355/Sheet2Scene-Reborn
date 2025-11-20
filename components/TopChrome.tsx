"use client";
import { usePathname } from "next/navigation";
import BookAnimation from "@components/BookAnimation";

export default function TopChrome() {
  const pathname = usePathname();
  // Show the book animation only on the home page
  if (pathname !== "/") return null;
  return <BookAnimation />;
}
