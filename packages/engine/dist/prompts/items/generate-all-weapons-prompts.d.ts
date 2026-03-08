/**
 * generate-all-weapons.ts
 * Combine tous les prompts d'armes MQ en un seul objet final.
 */
export declare const ALL_WEAPON_PROMPTS: {
    readonly blades: readonly [{
        readonly key: "shortsword";
        readonly style: "clean steel, simple adventurer gear, MQ clarity";
        readonly prompt: "\nÉpée courte simple. Lame droite acier mat, poignée cuir usé.\nDesign réaliste, style fantasy propre sans surcharge.\nFond parchemin grimoire.\n    ";
    }, {
        readonly key: "longsword";
        readonly style: "heroic blade, knightly steel, refined engraving";
        readonly prompt: "\nÉpée longue élégante. Garde croisée classique, lame solide.\nGravures subtiles, reflet métallique propre.\nAmbiance chevaleresque MQ.\n    ";
    }, {
        readonly key: "greatsword";
        readonly style: "brutal heavy blade, dark steel, MMO fantasy vibe";
        readonly prompt: "\nEspadon massif à deux mains.\nLame large, pointe lourde, style imposant.\nTextures d’acier foncé, usure réaliste.\nFond parchemin épais.\n    ";
    }, {
        readonly key: "scimitar";
        readonly style: "curved blade, desert wanderer aesthetic";
        readonly prompt: "\nCimeterre courbe, garde travaillée, métal poli.\nLignes élancées, motifs légers sur la lame.\nAmbiance aventurier exotique.\n    ";
    }, {
        readonly key: "katana";
        readonly style: "crafted steel, folded metal, subtle glow";
        readonly prompt: "\nKatana à la finition raffinée.\nLame courbe, hamon léger, poignée tressée sombre.\nEsthétique élégante et disciplinée MQ.\n    ";
    }, {
        readonly key: "dual_blades";
        readonly style: "twin weapons, mirrored shapes, agility aesthetic";
        readonly prompt: "\nDeux lames jumelles symétriques.\nDesign léger et précis, adapté aux combattants rapides.\nLueur métallique froide.\n    ";
    }, {
        readonly key: "runic_blade";
        readonly style: "magic runes, glowing lines, enchanted weapon";
        readonly prompt: "\nLame runique gravée de glyphes lumineux.\nMétal argent-vif, puissance ancienne.\nAura magique contrôlée, style MQ mythic.\n    ";
    }];
    readonly bows: readonly [{
        readonly key: "shortbow";
        readonly style: "hand-painted fantasy illustration, parchment shading, MQ aesthetic";
        readonly prompt: "\nArc court artisanal. Bois simple, usé, style aventurier débutant.\nCouleurs naturelles, textures boisées visibles, corde légèrement relâchée.\nFond neutre parchemin, éclairage doux ambiance grimoire.\n    ";
    }, {
        readonly key: "longbow";
        readonly style: "high-fidelity fantasy engraving, medieval archer vibe";
        readonly prompt: "\nArc long élégant et puissant. Forme légèrement courbée, bois sombre renforcé.\nDétails gravés, style sérieux et militaire.\nÉclairage dramatique, rendu clair sur fond parchemin.\n    ";
    }, {
        readonly key: "elven_longbow";
        readonly style: "ethereal elven craftsmanship, glowing lines, MQ enchanted";
        readonly prompt: "\nArc elfique fin aux lignes lumineuses. Courbure fluide, décorations organiques.\nCouleurs vert-émeraude ou argentées, légères lueurs magiques.\nFond parchemin doré légèrement texturé.\n    ";
    }, {
        readonly key: "composite_bow";
        readonly style: "detailed composite design, leather bindings, realistic wood-grain";
        readonly prompt: "\nArc composite renforcé, double courbure.\nBois clair + renforts d’os ou de corne, ligatures de cuir.\nAspect robuste mais compact.\nStyle MQ peinture propre, rendu professionnel.\n    ";
    }, {
        readonly key: "storm_bow";
        readonly style: "storm energy, crackling arcs, MQ magic effects";
        readonly prompt: "\nArc Tempête imprégné d’énergie orageuse.\nLueurs électriques autour des branches, motifs runiques discrets.\nCouleurs bleu-argent, aura puissante.\nArme légendaire MQ, magie modérée mais visible.\n    ";
    }, {
        readonly key: "shadowbow";
        readonly style: "shadow magic, dark smoke effects, MQ occult aesthetic";
        readonly prompt: "\nArc d’Ombre sculpté dans un bois noir obsidienne.\nFumée sombre subtile autour des branches.\nAccents violet foncé ou gris anthracite.\nFond parchemin assombri, contraste élevé.\n    ";
    }, {
        readonly key: "sunflare_bow";
        readonly style: "radiant light magic, holy glow, MQ mythic aesthetic";
        readonly prompt: "\nArc Flamme-Solaire brillant d’énergie radiante.\nTons dorés, lueurs solaires dans la poignée.\nDécorations délicates, aspect sacré.\nFond parchemin doré avec halo léger.\n    ";
    }, {
        readonly key: "astral_longbow";
        readonly style: "cosmic energy, astral runes, mythic celestial feel";
        readonly prompt: "\nArc Astral en énergie condensée.\nForme semi-matérielle, lignes d’énergie bleu-clair ou violet cosmique.\nRunes célestes flottantes, atmosphère mythique MQ.\nFond étoilé léger fusionné avec parchemin.\n    ";
    }];
    readonly daggers: readonly [{
        readonly key: "simple_dagger";
        readonly style: "basic gear, beginner adventurer, grounded design";
        readonly prompt: "\nDague simple en acier poli.\nPoignée en cuir, lame courte triangulaire.\nAspect utilitaire, zéro magic, style MQ propre.\n    ";
    }, {
        readonly key: "steel_knife";
        readonly style: "kitchen-combat hybrid, worn metal";
        readonly prompt: "\nCouteau d’acier robuste.\nLame fine et pratique, reflet métallique.\nAmbiance artisanale simple.\n    ";
    }, {
        readonly key: "throwing_dagger";
        readonly style: "balanced blade, aerodynamic design";
        readonly prompt: "\nDague de jet légère.\nLignes épurées, lame fine équilibrée pour lancer.\nFond parchemin minimaliste MQ.\n    ";
    }, {
        readonly key: "assassin_stiletto";
        readonly style: "thin stiletto blade, assassination aesthetic";
        readonly prompt: "\nStiletto assassin.\nLame longue et étroite.\nReflets métalliques froids.\n    ";
    }, {
        readonly key: "ceremonial_knife";
        readonly style: "ornamental blade, ritual motifs";
        readonly prompt: "\nCouteau cérémonial décoré de symboles.\nCouleurs or/rouge ou noir/or.\nAmbiance ésotérique MQ.\n    ";
    }, {
        readonly key: "shadowfang";
        readonly style: "dark smoke, stealth magic aesthetic";
        readonly prompt: "\nCroche-Ombre. Métal noirâtre absorbant la lumière.\nAccent violet foncé, petite lueur magique.\nDague rare MQ.\n    ";
    }, {
        readonly key: "runic_dirk";
        readonly style: "old runes, subtle glow, magical engravings";
        readonly prompt: "\nDague runique avec glyphes gravés.\nEffets magiques doux bleutés.\nAmbiance ancestrale MQ.\n    ";
    }, {
        readonly key: "poisoner_blade";
        readonly style: "hollow tube blade, toxin-ready design";
        readonly prompt: "\nLame du Toxineux.\nCanal interne pour toxines.\nDétails acérés, métal sombre.\nStyle dangereux mais élégant MQ.\n    ";
    }, {
        readonly key: "moonsteel_knife";
        readonly style: "radiant glow, lunar magic, mythic purity";
        readonly prompt: "\nCouteau en Lune-Argent.\nMétal clair lumineux.\nLueur blanche sacrée.\n    ";
    }, {
        readonly key: "void_stinger";
        readonly style: "ethereal void stinger, soul energy aesthetic";
        readonly prompt: "\nAiguillon du Vide. Lame d’ombre pure.\nLignes d’énergie, déformation subtile.\nArme mythique MQ.\n    ";
    }];
    readonly crossbows: readonly [{
        readonly key: "light_crossbow";
        readonly style: "wood+steel simple craftsmanship, MQ parchment aesthetic";
        readonly prompt: "\nArbalète légère en bois clair avec mécanisme simple.\nCordage tendu, textures bois réalistes.\nStyle aventurier débutant. Fond parchemin, éclairage doux.\n    ";
    }, {
        readonly key: "heavy_crossbow";
        readonly style: "heavy steel limbs, realistic shadows, medieval discipline";
        readonly prompt: "\nArbalète lourde massive, branches en acier sombre.\nAspect lent mais puissant. Détails mécaniques visibles.\nAmbiance soldat MQ, rendu sérieux.\n    ";
    }, {
        readonly key: "hand_crossbow";
        readonly style: "compact stealth gear, assassin vibe";
        readonly prompt: "\nPetite arbalète de poing compacte.\nBois noir ou acajou, mécanisme précis.\nStyle discret MQ, éclairage contrasté.\n    ";
    }, {
        readonly key: "siege_slinger";
        readonly style: "giant siege weapon, brutal engineering";
        readonly prompt: "\nArbalète de Siège massive, tirs très lourds.\nBras renforcés, métal brut.\nFond parchemin sombre, ambiance guerre médiévale MQ.\n    ";
    }, {
        readonly key: "tribal_boltbow";
        readonly style: "primitive carved wood, tribal patterns";
        readonly prompt: "\nArbalète tribale primitive en bois brut.\nDécorations de plumes, motifs rituels.\nAmbiance ancienne tribu MQ, teintes ocres.\n    ";
    }, {
        readonly key: "precision_crossbow";
        readonly style: "sharpened engineering, sniper vibe, fantasy elite";
        readonly prompt: "\nArbalète de Précision aux lignes fines.\nMécanisme optimisé, gravures légères, métal poli.\nAmbiance tireur d’élite MQ.\n    ";
    }, {
        readonly key: "arcane_repeatbow";
        readonly style: "glowing arcane components, magic tech mix";
        readonly prompt: "\nArbalète Arcanique à répétition.\nComposants lumineux bleu/violet, chambre à énergie.\nStyle technomagique MQ maîtrisé.\n    ";
    }, {
        readonly key: "abyssal_crossbow";
        readonly style: "shadow magic, dark aura, cursed aesthetic";
        readonly prompt: "\nArbalète Abyssale noire, formes fines et inquiétantes.\nNéant subtil, lueurs nécrotiques très légères.\nArme légendaire MQ sombre.\n    ";
    }, {
        readonly key: "solar_boltcaster";
        readonly style: "radiant holy glow, celestial craftsmanship";
        readonly prompt: "\nLance-Carreau Solaire brillant d’énergie dorée.\nMétal sacré, motifs sacrés.\nAmbiance divine MQ.\n    ";
    }, {
        readonly key: "astral_arbalest";
        readonly style: "cosmic energy bow, floating runes, mythic";
        readonly prompt: "\nArbalète Astrale en énergie condensée.\nForme semi-éthérée, runes stellaires.\nStyle mythique MQ, fond étoilé léger mixé parchemin.\n    ";
    }];
    readonly firearms: readonly [{
        readonly key: "flintlock_pistol";
        readonly style: "antique pistol, wood+steel mix, powder-age";
        readonly prompt: "\nPistolet à silex ancien.\nBois foncé, mécanisme à pierre.\nAmbiance âge de la poudre MQ.\n    ";
    }, {
        readonly key: "flintlock_dual";
        readonly style: "paired pistols, duelist vibe";
        readonly prompt: "\nDeux pistolets à silex assortis.\nDécorations subtiles, bois poli.\nAmbiance pirate/duelliste MQ (0 IP).\n    ";
    }, {
        readonly key: "arquebus";
        readonly style: "primitive heavy firearm, black powder authenticity";
        readonly prompt: "\nArquebuse longue et lourde.\nCanon large, bois brut.\nEffet d’ère médiéval tardif MQ.\n    ";
    }, {
        readonly key: "musket";
        readonly style: "refined powder-age craftsmanship";
        readonly prompt: "\nMousquet long et précis.\nBois brun poli, métal clair.\nAmbiance armée disciplinée MQ.\n    ";
    }, {
        readonly key: "blunderbuss";
        readonly style: "wide flared barrel, brutal close-range";
        readonly prompt: "\nTromblon à large canon évasé.\nAspect destructeur à courte portée.\nStyle MQ poudre noire.\n    ";
    }, {
        readonly key: "gnome_hand_cannon";
        readonly style: "gnomish tech, arcane sparks, fantasy engineering";
        readonly prompt: "\nCanon de Paume Gnome compact.\nMétal brillant + cristaux tech.\nAmbiance technomagique MQ.\n    ";
    }, {
        readonly key: "arcane_rifle";
        readonly style: "sleek energy rifle, crystal emitter";
        readonly prompt: "\nFusil arcanique avec chambre à cristaux.\nLumière bleue/violette.\nSilhouette futuriste mais fantasy MQ.\n    ";
    }, {
        readonly key: "runic_musket";
        readonly style: "engraved runes, holy energy";
        readonly prompt: "\nMousquet Runique aux glyphes radieuses.\nMétal argenté, lueurs sacrées subtiles.\nArme légendaire MQ sacrée.\n    ";
    }, {
        readonly key: "infernal_rifle";
        readonly style: "flaming demonic metal, cursed aura";
        readonly prompt: "\nFusil Infernal forgé démoniaque.\nMétal rougeoyé, teintes de chaleur.\nAmbiance abyssale MQ.\n    ";
    }, {
        readonly key: "astral_longrifle";
        readonly style: "cosmic beam weapon, stellar runes";
        readonly prompt: "\nLongrifle Astral fait d’énergie étoilée.\nSilhouette semi-éthérée, lignes cosmiques.\nArme mythique MQ.\n    ";
    }];
    readonly exotic: readonly [{
        readonly key: "whip";
        readonly style: "leather braid, dynamic curve, adventurer gear";
        readonly prompt: "\nFouet simple en cuir tressé.\nCourbe dynamique, texture détaillée.\nStyle aventurier MQ, fond parchemin.\n    ";
    }, {
        readonly key: "chain_whip";
        readonly style: "segmented chain, metallic spikes, danger aesthetic";
        readonly prompt: "\nFouet à chaînes segmentées.\nPointes métalliques, mouvement capturé.\nAmbiance agressive MQ.\n    ";
    }, {
        readonly key: "spiked_chain";
        readonly style: "heavy brutal chain, thick spikes";
        readonly prompt: "\nChaîne épineuse lourde.\nGros maillons + pointes solides.\nStyle MQ brutal, ambiance sombre.\n    ";
    }, {
        readonly key: "kusarigama";
        readonly style: "scythe + chain hybrid, martial discipline";
        readonly prompt: "\nKusarigama avec faucille affûtée et chaîne.\nEsthétique équilibrée et élégante.\nÉclairage doux, fond parchemin MQ.\n    ";
    }, {
        readonly key: "gnome_buzzblade";
        readonly style: "mechanical spinning blade, gnomish tech";
        readonly prompt: "\nTranchlame Gnome : disque rotatif muni d’engrenages.\nÉnergie bleue technomagique.\nAmbiance gnome MQ inventive.\n    ";
    }, {
        readonly key: "monk_bo";
        readonly style: "smooth wood staff, disciplined stance";
        readonly prompt: "\nBâton de Moine (Bo).\nHampe bois simple, poli.\nEsthétique martial MQ propre et neutre.\n    ";
    }, {
        readonly key: "nunchaku";
        readonly style: "dual sticks, simple rope, motion blur subtle";
        readonly prompt: "\nNunchaku équilibré, deux bâtons reliés.\nTexture bois naturel, chaîne ou corde.\nStyle MQ arts martiaux sans dériver vers IP.\n    ";
    }, {
        readonly key: "double_blade";
        readonly style: "dual-ended blade, fantasy agility";
        readonly prompt: "\nÉpée Double, lame à deux extrémités.\nAmbiance fantasy MQ agile.\nMétal clair, proportion fluide.\n    ";
    }, {
        readonly key: "cultist_martial_blade";
        readonly style: "dark ritualistic carvings, necrotic aura";
        readonly prompt: "\nLame du Rituel du Culte.\nRunes occultes, reflets nécrotiques.\nAmbiance noire MQ.\n    ";
    }, {
        readonly key: "infernal_chain";
        readonly style: "burning demonic metal, fiery glow";
        readonly prompt: "\nChaîne Infernale incandescente.\nMétal rougeoyant, flammes internes.\nArme légendaire MQ infernale.\n    ";
    }, {
        readonly key: "stellar_blade";
        readonly style: "cosmic steel, star-runes, radiant edges";
        readonly prompt: "\nLame Stellaire brillante d’énergie cosmique.\nRunes stellaires, métal clair et lisse.\nStyle mythique MQ cosmique.\n    ";
    }];
    readonly elemental: readonly [{
        readonly key: "flame_blade";
        readonly style: "embers, warm glow, enchanted fire";
        readonly prompt: "\nLame de Flamme : métal chauffé, lueurs rouge-orange.\nEffet feu magique contenu.\nStyle MQ élémentaire feu.";
    }, {
        readonly key: "frost_axe";
        readonly style: "icy crystalline edge, cold mist";
        readonly prompt: "\nHache de Givre.\nLame cristalline bleutée, brume froide subtile.\nAmbiance MQ hivernale.";
    }, {
        readonly key: "storm_mace";
        readonly style: "lightning veins, storm core";
        readonly prompt: "\nMasse Tempête avec veines d'électricité.\nCœur énergétique bleu.\nArme MQ élément tonnerre.";
    }, {
        readonly key: "earthbreaker";
        readonly style: "stone+metal fusion, grounded rugged look";
        readonly prompt: "\nFracasse-Terre massif, mélange pierre/métal.\nTextures rocheuses détaillées.\nAmbiance MQ tellurique.";
    }, {
        readonly key: "tidal_spear";
        readonly style: "water flow motif, smooth turquoise shimmer";
        readonly prompt: "\nLance Marée.\nMotifs fluides aqua, reflets turquoise.\nArme MQ eau, élégance douce.";
    }, {
        readonly key: "radiant_blade";
        readonly style: "holy bright edges, runic light";
        readonly prompt: "\nÉpée Radiante.\nLumière sacrée douce, runes lumineuses.\nStyle MQ sacré.";
    }];
    readonly cosmic: readonly [{
        readonly key: "astral_sword";
        readonly style: "cosmic blade, shimmering edges, nebula colors";
        readonly prompt: "\nÉpée Astrale semi-éthérée.\nLueurs stellaires, couleurs nébuleuses discrètes.\nStyle mythique MQ cosmique.\n    ";
    }, {
        readonly key: "void_sting";
        readonly style: "thin dark blade, void energy crackles";
        readonly prompt: "\nAiguillon du Néant, lame très fine.\nÉnergie du vide violette sombre.\nAura inquiétante mais sobre MQ.\n    ";
    }, {
        readonly key: "starbreaker";
        readonly style: "heavy cosmic hammer, meteor-metal";
        readonly prompt: "\nMarteau Brise-Étoiles forgé dans un métal météoritique.\nRunes stellaires, silhouette massive.\nAmbiance MQ céleste.\n    ";
    }, {
        readonly key: "comet_lance";
        readonly style: "long sleek spear, icy cosmic trail";
        readonly prompt: "\nLance-Comète, hampe claire, pointe glacée.\nEffet de traînée cosmique contrôlé.\nArme MQ mythique espace.\n    ";
    }, {
        readonly key: "eclipse_blade";
        readonly style: "dark crescent blade, solar-lunar contrast";
        readonly prompt: "\nLame Éclipse en forme de croissant sombre.\nContraste lumière/ombre subtil.\nAmbiance mythique MQ astrologique.\n    ";
    }];
    readonly polearms: readonly [{
        readonly key: "spear";
        readonly style: "simple wood shaft, primitive metal tip, grounded realism";
        readonly prompt: "\nLance simple. Hampe bois, pointe métal basique.\nLook ancien, utilitaire. Fond parchemin clair MQ.\n    ";
    }, {
        readonly key: "pike";
        readonly style: "long disciplined weapon, army formation feel";
        readonly prompt: "\nPique très longue, silhouette militaire.\nPointe acérée, hampe sombre.\nAmbiance rangées de soldats MQ.\n    ";
    }, {
        readonly key: "halberd";
        readonly style: "multi-purpose blade, medieval iconic polearm";
        readonly prompt: "\nHallebarde avec lame, pique et crochet.\nForme robuste, métal poli ou sombre.\nStyle bataille MQ héroïque.\n    ";
    }, {
        readonly key: "glaive";
        readonly style: "curved blade elegance, fantasy warrior";
        readonly prompt: "\nGlaive longue courbe.\nEsthétique équilibrée et élégante.\nLame acérée MQ, ambiance sobre.\n    ";
    }, {
        readonly key: "bardiche";
        readonly style: "large brutal blade, heavy infantry";
        readonly prompt: "\nBardiche massive, large tête de hache.\nLook brutal, acier lourd.\nAmbiance unité lourde MQ.\n    ";
    }, {
        readonly key: "fauchard";
        readonly style: "hooked blade, exotic medieval look";
        readonly prompt: "\nFauchard avec lame courbe et crochet discret.\nStyle élancé, détail précis.\nDesign MQ propre sans surcharge.\n    ";
    }, {
        readonly key: "naginata";
        readonly style: "long curved blade, refined martial discipline";
        readonly prompt: "\nNaginata élégante, lame longue et fine.\nPoignée tressée, ambiance discrète.\nStyle arts martiaux MQ, 0 IP.\n    ";
    }, {
        readonly key: "storm_spear";
        readonly style: "thunder energy, crackling aura";
        readonly prompt: "\nLance-Tempête. Énergie orageuse dans la lame.\nTeintes bleu-gris, lueur magique modérée.\nArme combattant des tempêtes MQ.\n    ";
    }, {
        readonly key: "celestial_halberd";
        readonly style: "radiant divine weapon, bright engravings";
        readonly prompt: "\nHallebarde Céleste rayonnante.\nMétal clair, motifs sacrés dorés.\nArme légendaire MQ lumineuse.\n    ";
    }, {
        readonly key: "titan_spike";
        readonly style: "colossal scale, thick metal, mythic brute force";
        readonly prompt: "\nPointe-Titan gigantesque.\nMétal ancien lourd, proportions démesurées.\nStyle mythique MQ, aura puissante.\n    ";
    }];
    readonly voidtech: readonly [{
        readonly key: "void_knife";
        readonly style: "shadow-forged steel, dim purple edges";
        readonly prompt: "\nCouteau du Vide : lame noire absorbant la lumière.\nÉclat violet léger.\nArme MQ ombragée.\n    ";
    }, {
        readonly key: "entropy_glaive";
        readonly style: "fractured geometry, entropy distortions";
        readonly prompt: "\nGlaive Entropique.\nLame asymétrique, petites distorsions visuelles.\nAmbiance MQ néant instable.\n    ";
    }, {
        readonly key: "null_pistol";
        readonly style: "anti-energy firearm, void core chamber";
        readonly prompt: "\nPistolet de Nullification.\nChambre centrale absorbant la lumière.\nAesthetic MQ voidtech sans SF moderne pur.\n    ";
    }, {
        readonly key: "phase_scythe";
        readonly style: "ghost-phase blade, thin ethereal curve";
        readonly prompt: "\nFaux de Phase semi-éthérée.\nLame translucide, contour spectral.\nStyle MQ ombre/éther.\n    ";
    }, {
        readonly key: "singularity_staff";
        readonly style: "orb of micro-gravity, bending light subtly";
        readonly prompt: "\nBâton Singularité avec sphère sombre au sommet.\nDéviation légère de lumière autour.\nTotem MQ du Vide.\n    ";
    }];
};
export type WeaponCategoryId = keyof typeof ALL_WEAPON_PROMPTS;
export type WeaponPrompt = (typeof ALL_WEAPON_PROMPTS)[WeaponCategoryId][number];
export declare const generateAllWeaponsJSON: () => string;
