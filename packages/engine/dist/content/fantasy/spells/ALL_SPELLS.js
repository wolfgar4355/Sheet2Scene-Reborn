// ⚠ FICHIER GÉNÉRÉ AUTOMATIQUEMENT — NE PAS MODIFIER
export const ALL_SPELLS = [
    {
        "key": "ward_spark",
        "name": "Étincelle de Protection",
        "world": "fantasy",
        "tier": "cantrip",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "self",
            "value": "—"
        },
        "duration": "1 tour",
        "concentration": false,
        "components": {
            "verbal": false,
            "somatic": true
        },
        "tags": [
            "buff-defense"
        ],
        "availableInEras": [
            "ancient-age",
            "high-kingdoms"
        ],
        "shortSummary": "Une mini-barrière absorbe une faible attaque.",
        "description": "Une étincelle de force entoure le lanceur, réduisant légèrement les dégâts du prochain coup."
    },
    {
        "key": "minor_mending",
        "name": "Rétablissement Mineur",
        "world": "fantasy",
        "tier": "cantrip",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true
        },
        "tags": [
            "heal"
        ],
        "availableInEras": [
            "ancient-age",
            "age-of-heroes"
        ],
        "shortSummary": "Soigne de très petites blessures.",
        "description": "Ferme une coupure légère, apaise une contusion ou stabilise un saignement faible."
    },
    {
        "key": "aegis_shell",
        "name": "Coquille d'Égide",
        "world": "fantasy",
        "tier": "tier1",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "self",
            "value": "—"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "somatic": true
        },
        "tags": [
            "buff-defense"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Bouclier d’énergie réduisant les dégâts physiques.",
        "description": "Une coquille translucide entoure le lanceur, diminuant l’impact des attaques directes."
    },
    {
        "key": "healing_touch",
        "name": "Toucher Guérisseur",
        "world": "fantasy",
        "tier": "tier1",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "heal",
            "single-target"
        ],
        "availableInEras": [
            "ancient-age",
            "high-kingdoms"
        ],
        "shortSummary": "Un soin faible à modéré.",
        "description": "Le lanceur transfère une énergie curative dans la cible, réparant brièvement tissus et os."
    },
    {
        "key": "resist_fire_minor",
        "name": "Résistance Mineure au Feu",
        "world": "fantasy",
        "tier": "tier1",
        "school": "pyromancy",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "1h",
        "concentration": true,
        "components": {
            "somatic": true
        },
        "tags": [
            "buff-defense",
            "damage-fire"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Protection limitée contre la chaleur.",
        "description": "Une couche d’énergie rougeâtre protège légèrement la cible du feu."
    },
    {
        "key": "mana_barrier",
        "name": "Barrière de Mana",
        "world": "fantasy",
        "tier": "tier2",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "self",
            "value": "—"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true
        },
        "tags": [
            "buff-defense"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Un dôme de force absorbe plusieurs attaques.",
        "description": "Le lanceur crée une bulle protectrice absorbant une quantité notable de dégâts."
    },
    {
        "key": "healing_wave",
        "name": "Vague de Guérison",
        "world": "fantasy",
        "tier": "tier2",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "6m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true
        },
        "tags": [
            "heal",
            "multi-target"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Soigne tous les alliés proches.",
        "description": "Une vague d’énergie vitale émane du lanceur et soigne les créatures amies dans la zone."
    },
    {
        "key": "ward_against_dark",
        "name": "Protection contre les Ténèbres",
        "world": "fantasy",
        "tier": "tier2",
        "school": "spiritbond",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "buff-defense",
            "damage-necrotic"
        ],
        "availableInEras": [
            "dark-age"
        ],
        "shortSummary": "Protection contre nécrotique/ombre.",
        "description": "Une lumière sacrée repousse les énergies d’Ombremonde autour de la cible."
    },
    {
        "key": "resist_cold",
        "name": "Résistance au Froid",
        "world": "fantasy",
        "tier": "tier2",
        "school": "frostbinding",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "1h",
        "concentration": true,
        "components": {
            "somatic": true
        },
        "tags": [
            "buff-defense",
            "damage-cold"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Protection contre le froid sévère.",
        "description": "Une aura glaciale protège la cible des températures extrêmes."
    },
    {
        "key": "aura_of_sanctity",
        "name": "Aura de Sanctité",
        "world": "fantasy",
        "tier": "tier3",
        "school": "spiritbond",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true
        },
        "tags": [
            "buff-defense",
            "area-large"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Protège tous les alliés contre malédictions & peur.",
        "description": "Une aura lumineuse renforce la volonté et protège contre les effets sombres."
    },
    {
        "key": "greater_heal",
        "name": "Guérison Supérieure",
        "world": "fantasy",
        "tier": "tier3",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "heal",
            "single-target"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Un soin puissant qui referme toutes les plaies importantes.",
        "description": "Une énergie pure revitalise la cible, guérissant rapidement blessures graves et fractures."
    },
    {
        "key": "cleanse_affliction",
        "name": "Purge d’Affliction",
        "world": "fantasy",
        "tier": "tier3",
        "school": "spiritbond",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "heal",
            "debuff"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Annule poisons, maladies et malédictions faibles.",
        "description": "Une énergie sacrée disperse les toxines, fièvres et petites malédictions."
    },
    {
        "key": "resist_lightning",
        "name": "Résistance à la Foudre",
        "world": "fantasy",
        "tier": "tier3",
        "school": "stormcalling",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "1h",
        "concentration": true,
        "components": {
            "somatic": true
        },
        "tags": [
            "buff-defense",
            "damage-lightning"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Protection contre l’électricité.",
        "description": "Une couche d’énergie tempétueuse absorbe une partie des décharges électriques."
    },
    {
        "key": "diamond_skin",
        "name": "Peau de Diamant",
        "world": "fantasy",
        "tier": "tier4",
        "school": "terraforge",
        "castingTime": "action",
        "range": {
            "type": "self",
            "value": "—"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "buff-defense"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Transforme la peau en matériau quasi indestructible.",
        "description": "La peau du lanceur se durcit en un cristal translucide résistant à presque toutes les attaques."
    },
    {
        "key": "mass_healing_aura",
        "name": "Aura de Guérison de Masse",
        "world": "fantasy",
        "tier": "tier4",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "12m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true
        },
        "tags": [
            "heal",
            "multi-target"
        ],
        "availableInEras": [
            "high-kingdoms",
            "mythic-age"
        ],
        "shortSummary": "Puissant soin de zone.",
        "description": "Une vague de lumière pure répare les blessures des alliés dans un large rayon."
    },
    {
        "key": "purge_corruption",
        "name": "Purge de la Corruption",
        "world": "fantasy",
        "tier": "tier4",
        "school": "spiritbond",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true
        },
        "tags": [
            "debuff",
            "area-large"
        ],
        "availableInEras": [
            "dark-age"
        ],
        "shortSummary": "Efface toutes les corruptions et malédictions fortes.",
        "description": "Une lumière purificatrice disperse les énergies corrompues et libère les esprits touchés."
    },
    {
        "key": "mythic_barrier",
        "name": "Barrière Mythique",
        "world": "fantasy",
        "tier": "tier5",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "18m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "buff-defense",
            "area-large"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Un dôme presque impénétrable.",
        "description": "Une barrière colossale de force pure protège une zone entière contre attaques physiques et magiques."
    },
    {
        "key": "divine_restoration",
        "name": "Restauration Divine",
        "world": "fantasy",
        "tier": "tier5",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "heal"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Rétablit totalement un allié.",
        "description": "Une énergie sacrée restaure la vitalité, purge toutes les altérations et revitalise complètement un allié."
    },
    {
        "key": "spark_bolt",
        "name": "Éclair Étincelant",
        "world": "fantasy",
        "tier": "cantrip",
        "school": "stormcalling",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "12m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage-lightning",
            "single-target"
        ],
        "availableInEras": [
            "ancient-age",
            "age-of-heroes",
            "high-kingdoms"
        ],
        "shortSummary": "Un petit éclair rapide frappe une cible.",
        "description": "Le lanceur libère une étincelle électrique qui touche une créature dans une ligne directe."
    },
    {
        "key": "ember_dart",
        "name": "Dard de Braise",
        "world": "fantasy",
        "tier": "cantrip",
        "school": "pyromancy",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "18m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": false,
            "somatic": true
        },
        "tags": [
            "damage-fire",
            "single-target"
        ],
        "availableInEras": [
            "ancient-age",
            "high-kingdoms"
        ],
        "shortSummary": "Une braise ardente jaillit en ligne droite.",
        "description": "Une petite braise chargée de chaleur frappe une créature à portée."
    },
    {
        "key": "shadow_lash",
        "name": "Fouet d’Ombre",
        "world": "fantasy",
        "tier": "cantrip",
        "school": "umbramancy",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "9m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage-necrotic",
            "single-target"
        ],
        "availableInEras": [
            "dark-age"
        ],
        "shortSummary": "Une ombre tranchante lacère la cible.",
        "description": "Un filament de ténèbres frappe la cible, drainant un fragment d’énergie vitale."
    },
    {
        "key": "fire_burst",
        "name": "Explosion de Flammes",
        "world": "fantasy",
        "tier": "tier1",
        "school": "pyromancy",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "6m rayon"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage-fire",
            "area-large"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Petite explosion de flammes autour du lanceur.",
        "description": "Le mage relâche une onde de flammes qui enflamme l’air dans un rayon de 6 mètres."
    },
    {
        "key": "ice_shard",
        "name": "Éclat de Givre",
        "world": "fantasy",
        "tier": "tier1",
        "school": "frostbinding",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "18m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": false,
            "somatic": true
        },
        "tags": [
            "damage-cold",
            "single-target"
        ],
        "availableInEras": [
            "ancient-age",
            "high-kingdoms"
        ],
        "shortSummary": "Une flèche de glace transperce une cible.",
        "description": "Un éclat gelé est projeté rapidement vers une cible, infligeant un froid mordant."
    },
    {
        "key": "stone_spike",
        "name": "Pointe de Pierre",
        "world": "fantasy",
        "tier": "tier1",
        "school": "terraforge",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "6m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": false,
            "somatic": true
        },
        "tags": [
            "damage",
            "single-target"
        ],
        "availableInEras": [
            "ancient-age"
        ],
        "shortSummary": "Une pointe de roche sort du sol et empale une cible.",
        "description": "Une pierre affûtée surgit soudainement du sol, frappant une créature à proximité."
    },
    {
        "key": "lightning_arc",
        "name": "Arc Électrique",
        "world": "fantasy",
        "tier": "tier2",
        "school": "stormcalling",
        "castingTime": "action",
        "range": {
            "type": "multi-target",
            "value": "9m, 3 cibles"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage-lightning",
            "multi-target"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Un éclair bondit de cible en cible.",
        "description": "Un arc électrique frappe une créature, puis saute vers deux autres cibles proches."
    },
    {
        "key": "flame_spear",
        "name": "Lanceflamme",
        "world": "fantasy",
        "tier": "tier2",
        "school": "pyromancy",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "12m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage-fire",
            "line"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Un jet de flammes brûle tout sur son passage.",
        "description": "Un souffle de feu concentré balaie une ligne droite de 12 mètres."
    },
    {
        "key": "gravity_pulse",
        "name": "Impulsion Gravitationnelle",
        "world": "fantasy",
        "tier": "tier2",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "6m rayon"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage",
            "control",
            "area-large"
        ],
        "availableInEras": [
            "arcane-renaissance"
        ],
        "shortSummary": "Un choc de gravité écrase les ennemis autour.",
        "description": "Une onde écrasante de force modifie brutalement la gravité dans une zone."
    },
    {
        "key": "inferno_orb",
        "name": "Orbe Infernal",
        "world": "fantasy",
        "tier": "tier3",
        "school": "pyromancy",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "18m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "poussière de soufre"
        },
        "tags": [
            "damage-fire",
            "area-large"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Un orbe enflammé explose en un cercle incendiaire.",
        "description": "Une boule de feu condensée explose, embrasant une large zone.",
        "scaling": {
            "upcastText": "+1d6 feu par tier au-dessus de tier3"
        }
    },
    {
        "key": "frost_nova",
        "name": "Nova de Givre",
        "world": "fantasy",
        "tier": "tier3",
        "school": "frostbinding",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage-cold",
            "control",
            "area-large"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Une onde glacée explose du lanceur.",
        "description": "Un choc glacial gèle l’air et ralentit toutes les créatures dans un rayon de 9 mètres."
    },
    {
        "key": "umbral_scream",
        "name": "Hurlement Ombreux",
        "world": "fantasy",
        "tier": "tier3",
        "school": "umbramancy",
        "castingTime": "action",
        "range": {
            "type": "cone",
            "value": "12m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true
        },
        "tags": [
            "damage-necrotic",
            "fear",
            "cone"
        ],
        "availableInEras": [
            "dark-age"
        ],
        "shortSummary": "Un cri de pure ténèbre fait vaciller la volonté ennemie.",
        "description": "Une onde vibrante d’ombre hurle dans un cône de 12 mètres, infligeant des dégâts nécrotiques et effrayant les créatures faibles."
    },
    {
        "key": "thunder_collapse",
        "name": "Effondrement Tonitruant",
        "world": "fantasy",
        "tier": "tier4",
        "school": "stormcalling",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "18m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true
        },
        "tags": [
            "damage-lightning",
            "area-large",
            "control"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Un tonnerre cataclysmique écrase une zone.",
        "description": "Une colonne d’énergie orageuse s’abat depuis le ciel, brisant pierre, sol et os."
    },
    {
        "key": "molten_rift",
        "name": "Faille de Magma",
        "world": "fantasy",
        "tier": "tier4",
        "school": "pyromancy",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "15m x 3m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "somatic": true
        },
        "tags": [
            "damage-fire",
            "area-large"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Une fissure de magma éclate dans le sol.",
        "description": "Le sol s’ouvre, libérant une coulée de magma brûlant sur plusieurs mètres."
    },
    {
        "key": "meteor_fall",
        "name": "Chute de Météore",
        "world": "fantasy",
        "tier": "tier5",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "36m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage",
            "area-large"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Un énorme météore arcane tombe du ciel.",
        "description": "Un rocher incandescent renforcé d’énergie pure s’abat sur la zone ciblée."
    },
    {
        "key": "shadow_cataclysm",
        "name": "Cataclysme Ombreux",
        "world": "fantasy",
        "tier": "tier5",
        "school": "umbramancy",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "18m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage-necrotic",
            "area-large",
            "debuff"
        ],
        "availableInEras": [
            "dark-age",
            "mythic-age"
        ],
        "shortSummary": "Une explosion de ténèbres consume la zone.",
        "description": "Un vortex d’ombre dévore l’énergie vitale de toutes les créatures dans la zone."
    },
    {
        "key": "guiding_glow",
        "name": "Lueur Guide",
        "world": "fantasy",
        "tier": "cantrip",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "18m"
        },
        "duration": "1 heure",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "vision",
            "buff-utility"
        ],
        "availableInEras": [
            "ancient-age",
            "age-of-heroes",
            "high-kingdoms"
        ],
        "shortSummary": "Crée une petite lumière flottante qui suit le lanceur.",
        "description": "Une petite sphère lumineuse apparaît et flotte à proximité du lanceur, éclairant l’équivalent d’une torche.",
        "visualCue": "Petite orbe dorée flottant autour du lanceur."
    },
    {
        "key": "mage_hand_s2s",
        "name": "Main Spectrale",
        "world": "fantasy",
        "tier": "cantrip",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "9m"
        },
        "duration": "1 minute",
        "concentration": true,
        "components": {
            "verbal": false,
            "somatic": true
        },
        "tags": [
            "movement",
            "buff-utility"
        ],
        "availableInEras": [
            "ancient-age",
            "high-kingdoms"
        ],
        "shortSummary": "Une main invisible manipule des objets légers à distance.",
        "description": "Une main translucide faite d’énergie apparaît à portée et peut ouvrir des portes, saisir des objets légers ou interagir avec l’environnement.",
        "visualCue": "Main d’énergie semi-transparente."
    },
    {
        "key": "whisper_vein",
        "name": "Veine Murmurante",
        "world": "fantasy",
        "tier": "cantrip",
        "school": "mindweave",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "18m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": false
        },
        "tags": [
            "buff-utility"
        ],
        "availableInEras": [
            "dark-age",
            "high-kingdoms"
        ],
        "shortSummary": "Envoie un court message mental à une cible visible.",
        "description": "Le lanceur chuchote mentalement quelques mots à une créature visible dans la portée. Seule la cible perçoit le message.",
        "visualCue": "Fines vaguelettes d’énergie bleutée entre les deux esprits."
    },
    {
        "key": "detect_magic_s2s",
        "name": "Détection de Magie",
        "world": "fantasy",
        "tier": "tier1",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "vision",
            "buff-utility"
        ],
        "availableInEras": [
            "ancient-age",
            "high-kingdoms"
        ],
        "shortSummary": "Révèle les présences magiques dans une zone.",
        "description": "Les auras magiques des objets, créatures et effets deviennent visibles pour le lanceur dans un rayon de 9 mètres.",
        "visualCue": "Contours irisés autour des objets et créatures magiques."
    },
    {
        "key": "lightstep",
        "name": "Pas-Léger",
        "world": "fantasy",
        "tier": "tier1",
        "school": "wildgrowth",
        "castingTime": "bonus-action",
        "range": {
            "type": "self",
            "value": "—"
        },
        "duration": "1 minute",
        "concentration": true,
        "components": {
            "verbal": false,
            "somatic": true
        },
        "tags": [
            "movement",
            "buff-utility"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Améliore la discrétion et la mobilité du lanceur.",
        "description": "Les pas du lanceur ne produisent presque aucun son et ses mouvements deviennent plus fluides, facilitant la discrétion et les déplacements difficiles.",
        "visualCue": "Feuilles ou petites lueurs vertes sous les pieds."
    },
    {
        "key": "stone_echo",
        "name": "Écho de Pierre",
        "world": "fantasy",
        "tier": "tier1",
        "school": "terraforge",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "18m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "vision",
            "buff-utility"
        ],
        "availableInEras": [
            "ancient-age"
        ],
        "shortSummary": "Lis brièvement la mémoire du sol.",
        "description": "Le lanceur pose sa main sur une surface minérale et perçoit des traces des passages récents : vibrations, empreintes, déplacements lourds.",
        "visualCue": "Ondes de poussière parcourant le sol."
    },
    {
        "key": "misty_step_s2s",
        "name": "Pas Brumeux",
        "world": "fantasy",
        "tier": "tier2",
        "school": "aethercraft",
        "castingTime": "bonus-action",
        "range": {
            "type": "special",
            "value": "9m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "movement",
            "teleport"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Téléportation courte dans une brume éthérée.",
        "description": "Le lanceur se dissout brièvement dans une brume légère et réapparaît dans un emplacement libre qu’il voit à 9 mètres.",
        "visualCue": "Nuage de brume violette qui se dissipe instantanément."
    },
    {
        "key": "shared_darkvision",
        "name": "Vision des Ombres Partagée",
        "world": "fantasy",
        "tier": "tier2",
        "school": "umbramancy",
        "castingTime": "action",
        "range": {
            "type": "multi-target",
            "value": "9m, jusqu’à 3 alliés"
        },
        "duration": "8 heures",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "vision",
            "buff-utility"
        ],
        "availableInEras": [
            "dark-age",
            "high-kingdoms"
        ],
        "shortSummary": "Donne une vision dans l’obscurité à plusieurs alliés.",
        "description": "Les yeux des cibles se parent d’un éclat sombre, leur permettant de voir dans l’obscurité non magique sur une grande portée.",
        "visualCue": "Reflets violets dans les iris."
    },
    {
        "key": "echo_image",
        "name": "Image Écho",
        "world": "fantasy",
        "tier": "tier2",
        "school": "mindweave",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "18m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "buff-utility",
            "control"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Crée une illusion simple et fixe.",
        "description": "Le lanceur façonne une image visuelle statique (ou très faiblement animée) pour tromper les observateurs, sans son ni odeur.",
        "visualCue": "Contours légèrement flous si l’on se concentre dessus."
    },
    {
        "key": "wind_voice",
        "name": "Voix du Vent",
        "world": "fantasy",
        "tier": "tier2",
        "school": "stormcalling",
        "castingTime": "action",
        "range": {
            "type": "special",
            "value": "jusqu’à 1 km"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": false
        },
        "tags": [
            "buff-utility"
        ],
        "availableInEras": [
            "ancient-age",
            "age-of-heroes"
        ],
        "shortSummary": "Transporte la voix du lanceur à un endroit lointain.",
        "description": "Le message du lanceur est porté par le vent jusqu’à un lieu ou une personne connue à distance, tant que la distance reste raisonnable et dans le même plan.",
        "visualCue": "Filet de vent tourbillonnant quittant la bouche du lanceur."
    },
    {
        "key": "meld_with_earth",
        "name": "Fusion Tellurique",
        "world": "fantasy",
        "tier": "tier3",
        "school": "terraforge",
        "castingTime": "action",
        "range": {
            "type": "self",
            "value": "—"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "movement",
            "buff-utility"
        ],
        "availableInEras": [
            "ancient-age"
        ],
        "shortSummary": "Permet de traverser pierre et terre solide lentement.",
        "description": "Le corps du lanceur se fond partiellement dans la roche ou la terre, lui permettant de traverser les parois épaisses ou de se cacher à même le sol.",
        "visualCue": "La peau prend un aspect de pierre et se fond dans le décor."
    },
    {
        "key": "water_path",
        "name": "Voie des Eaux",
        "world": "fantasy",
        "tier": "tier3",
        "school": "wildgrowth",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "18m"
        },
        "duration": "1 heure",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "movement",
            "buff-utility"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Permet de marcher sur l’eau ou de respirer sous l’eau.",
        "description": "Le lanceur choisit si les cibles marchent sur la surface de l’eau comme si elle était solide, ou respirent sous l’eau sans difficulté.",
        "visualCue": "Reflets aquatiques dans une aura légère autour des cibles."
    },
    {
        "key": "binding_roots",
        "name": "Racines Entravantes",
        "world": "fantasy",
        "tier": "tier3",
        "school": "wildgrowth",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9m"
        },
        "duration": "1 minute",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "control",
            "area-large"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Entrave les déplacements ennemis avec des racines vivantes.",
        "description": "Des racines et lianes surgissent du sol, entravant les créatures hostiles dans la zone et rendant le terrain difficile.",
        "visualCue": "Racines verdâtres s’enroulant autour des jambes."
    },
    {
        "key": "silent_shroud",
        "name": "Linceul Silencieux",
        "world": "fantasy",
        "tier": "tier3",
        "school": "mindweave",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "control",
            "buff-utility",
            "area-large"
        ],
        "availableInEras": [
            "dark-age",
            "high-kingdoms"
        ],
        "shortSummary": "Crée une zone où aucun son ne peut être émis.",
        "description": "Dans la zone affectée, les sons sont étouffés jusqu’au silence complet, empêchant communication verbale et cris d’alarme.",
        "visualCue": "Légère distorsion de l’air, comme une bulle de verre."
    },
    {
        "key": "phantom_march",
        "name": "Marche Fantomale",
        "world": "fantasy",
        "tier": "tier4",
        "school": "mindweave",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "18m"
        },
        "duration": "1 heure",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "control",
            "buff-utility",
            "area-large"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Crée une troupe illusoire pour tromper l’ennemi.",
        "description": "Une armée fantomatique se manifeste visuellement et auditivement, simulant une véritable force en marche. Idéal pour diversions ou intimidation.",
        "visualCue": "Silhouettes vaporeuses d’armées, bannières translucides."
    },
    {
        "key": "farstride_gate",
        "name": "Porte de Longs Pas",
        "world": "fantasy",
        "tier": "tier4",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "special",
            "value": "jusqu’à 1 km (ligne de vue ou lieu connu)"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "teleport",
            "movement"
        ],
        "availableInEras": [
            "arcane-renaissance",
            "mythic-age"
        ],
        "shortSummary": "Crée une ouverture pour transporter un petit groupe.",
        "description": "Le lanceur ouvre une brève porte d’énergie qui relie sa position à un lieu connu ou visible, permettant à un groupe restreint de la traverser.",
        "visualCue": "Portail elliptique d’énergie, se repliant sur lui-même."
    },
    {
        "key": "veil_of_mist",
        "name": "Voile de Brume",
        "world": "fantasy",
        "tier": "tier4",
        "school": "stormcalling",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "18m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "control",
            "buff-utility",
            "area-large"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Remplit une zone de brume épaisse pour couvrir la retraite.",
        "description": "Une brume dense limite la visibilité, offrant un couvert important pour les alliés et rendant le tir à distance difficile.",
        "visualCue": "Épais nuage gris tourbillonnant lentement."
    },
    {
        "key": "world_sense",
        "name": "Sens du Monde",
        "world": "fantasy",
        "tier": "tier5",
        "school": "spiritbond",
        "castingTime": "ten-minutes",
        "range": {
            "type": "special",
            "value": "plusieurs kilomètres"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "vision",
            "buff-utility"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Perçoit grandes menaces, anomalies ou miracles sur de longues distances.",
        "description": "Le lanceur s’accorde à l’esprit d’une région entière et perçoit les grandes perturbations : guerre, magie titanesque, catastrophes naturelles, présences mythiques.",
        "visualCue": "Le lanceur semble se figer, les yeux brillants d’un éclat lointain.",
        "sfxCue": "Rumeur lointaine, comme si le monde lui-même murmurait."
    },
    {
        "key": "astral_trace",
        "name": "Trace Astrale",
        "world": "fantasy",
        "tier": "tier5",
        "school": "aethercraft",
        "castingTime": "ten-minutes",
        "range": {
            "type": "sphere",
            "value": "inconnu / plan local"
        },
        "duration": "1 heure",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "vision",
            "buff-utility"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Suit les échos magiques d’un individu ou d’un artefact.",
        "description": "Le lanceur verrouille son attention sur un nom, une aura ou un artefact. Il perçoit mentalement la direction générale et la distance approximative de sa cible, même à travers de vastes régions.",
        "visualCue": "Fines lignes de lumière quittant le lanceur vers l’horizon."
    }
];
