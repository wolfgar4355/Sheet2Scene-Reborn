"use client";

import Link from "next/link";
import { GrimoireFrame } from "engine";
import { BookShell, PageLeft, PageRight } from "@/components/Grimoire";
import { WORLDS } from "../create/options";

export default function WorldsIndex() {
  const worldKeys = Object.keys(WORLDS) as Array<keyof typeof WORLDS>;

  return (
    <GrimoireFrame worldId="mithril-quest" page={1}>
      <BookShell>
        {/* PAGE DE GAUCHE : L'index des mondes */}
        <PageLeft>
          <div className="flex flex-col h-full items-center justify-center p-8 space-y-6">
            <h1 className="text-4xl font-serif text-[#1e1e1e] tracking-wider text-center drop-shadow-sm mb-4">
              L'Index des Mondes
            </h1>
            
            <p className="text-[#3b3b3b] text-center italic mb-6">
              "De la fantasy épique aux galaxies oubliées... Ouvrez le recueil des Campagnes."
            </p>

            <div className="w-full flex-1 overflow-y-auto space-y-4 pr-2">
              {worldKeys.map((key) => {
                const world = WORLDS[key];
                return (
                  <Link 
                    key={key} 
                    href={`/worlds/${key}`}
                    className="block p-4 border border-[#8B7355]/30 rounded-lg hover:bg-[#8B7355]/10 transition-colors shadow-sm bg-black/5 group"
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-[#2a2a2a] group-hover:text-black transition-colors">{world.label}</h2>
                      <span className="text-sm font-medium text-[#5a5a5a] bg-black/5 px-2 py-1 rounded">
                        {world.eras.length} Époques
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </PageLeft>

        {/* PAGE DE DROITE : Illustration et Lore textuel */}
        <PageRight>
          <div className="flex flex-col h-full items-center justify-center p-8">
            <div className="w-48 h-48 rounded-full border-4 border-[#8B7355]/20 shadow-inner flex items-center justify-center bg-black/5 mb-8">
               <span className="text-6xl opacity-30">🌍</span>
            </div>
            
            <h2 className="text-2xl font-serif text-[#1e1e1e] text-center mb-4">
              Archives Narratives
            </h2>
            
            <p className="text-justify text-[#3b3b3b] leading-relaxed mb-6">
              Ce système regroupe les différentes essences narratives compatibles avec les générateurs locaux et cloud. Chaque monde possède un ton, des époques (Eras) et des archétypes de personnages (Classes) spécifiques qui affectent le comportement de l'Intelligence Artificielle.
            </p>
            
            <p className="text-center font-bold text-[#2a2a2a]">
              Sélectionnez un Monde sur la page de gauche pour en étudier les arcanes de plus près.
            </p>
          </div>
        </PageRight>
      </BookShell>
    </GrimoireFrame>
  );
}
