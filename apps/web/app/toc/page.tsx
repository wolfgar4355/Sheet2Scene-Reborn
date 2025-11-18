// app/toc/page.tsx
import Link from 'next/link';
import GrimoireShell from '@components/GrimoireShell';

export default function TocPage() {
  return (
    <GrimoireShell mode="toc">
      <h1 className="text-xl font-semibold mb-6 text-center">Table des matières</h1>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <Link href="/bestiary" className="block rounded-md border p-4 hover:bg-amber-50">
            Bestiaires
          </Link>
        </li>
        <li>
          <Link href="/worlds" className="block rounded-md border p-4 hover:bg-amber-50">
            Mondes
          </Link>
        </li>
        <li>
          <Link href="/grimoire" className="block rounded-md border p-4 hover:bg-amber-50">
            Grimoire
          </Link>
        </li>
      </ul>
    </GrimoireShell>
  );
}
