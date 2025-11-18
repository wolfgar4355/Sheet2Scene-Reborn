'use client';

import { usePathname } from 'next/navigation';

// Hook de navigation du grimoire
export default function useBookNav() {
  const pathname = usePathname();
  return { active: pathname };
}
