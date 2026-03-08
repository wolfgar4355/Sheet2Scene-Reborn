import { notFound } from "next/navigation";
import Link from "next/link";
import { GrimoireFrame } from "engine";
import { BookShell, PageLeft, PageRight } from "@/components/Grimoire";
import { WORLDS, WorldKey } from "../../create/options";

// Force static generation for known worlds
export function generateStaticParams() {
  return Object.keys(WORLDS).map((id) => ({
    id: id,
  }));
}

export default function WorldDetailPage({ params }: { params: { id: string } }) {
  const worldId = params.id as WorldKey;
  const world = WORLDS[worldId];

  if (!world) {
    notFound();
  }

  return (
    <GrimoireFrame worldId={worldId} page={1}>
      <BookShell>
        {/* PAGE DE GAUCHE : Description & Lore */}
        <PageLeft>
          <div className="flex flex-col h-full p-8">
            <h1 className="text-4xl font-serif text-[#1e1e1e] tracking-wider mb-2 border-b border-[#8B7355]/30 pb-4">
              {world.label}
            </h1>
            
            <div className="mt-6 flex-1">
              <h2 className="text-xl font-bold text-[#2a2a2a] mb-4">Époques Disponibles</h2>
              <ul className="space-y-3">
                {world.eras.map((era) => (
                  <li key={era.key} className="flex items-start">
                     <span className="text-[#8B7355] mr-2">✦</span>
                     <div>
                       <span className="font-semibold text-[#1e1e1e]">{era.label}</span>
                     </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6">
               <Link href="/worlds" className="text-[#8B7355] hover:text-[#5a4a36] hover:underline font-serif italic text-lg transition-colors">
                 ↢ Retour à l'Index
               </Link>
            </div>
          </div>
        </PageLeft>

        {/* PAGE DE DROITE : Classes & Gameplay */}
        <PageRight>
           <div className="flex flex-col h-full p-8">
             <h2 className="text-2xl font-serif text-[#1e1e1e] mb-6 inline-flex items-center gap-2">
               <span>Archétypes (Classes)</span>
             </h2>

             <div className="flex-1 overflow-y-auto pr-2">
                <div className="grid grid-cols-1 gap-3">
                  {world.classes.map((cls) => (
                    <div key={cls.key} className="p-3 bg-black/5 border border-[#8B7355]/20 rounded-md">
                       <span className="font-bold text-[#2a2a2a]">{cls.label}</span>
                    </div>
                  ))}
                </div>
             </div>

             <div className="mt-8 bg-black/5 p-6 rounded-xl border border-[#8B7355]/30 text-center">
                <p className="text-[#3b3b3b] mb-4 italic">
                  Prêt à tisser une nouvelle légende dans {world.label} ?
                </p>
                <Link 
                  href={`/create?world=${worldId}`}
                  className="inline-block px-6 py-3 bg-[#1e1e1e] text-[#d4c4a8] font-serif rounded hover:bg-[#2a2a2a] hover:scale-105 transition-all shadow-md"
                >
                  Fouler ces terres
                </Link>
             </div>
           </div>
        </PageRight>
      </BookShell>
    </GrimoireFrame>
  );
}
