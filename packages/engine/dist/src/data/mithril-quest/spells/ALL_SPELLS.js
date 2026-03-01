export const ALL_SPELLS = [
    {
        "key": "ward_spark",
        "name": "Étincelle de Protection",
        "world": "mithril-quest",
        "tier": "cantrip",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "self",
            "value": "rayon 1,5 m"
        },
        "duration": "1 tour",
        "concentration": false,
        "components": {
            "verbal": true,
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
        "description": "Une étincelle de force pure entoure le lanceur, réduisant légèrement les dégâts de la prochaine attaque qui le touche avant la fin du tour."
    },
    {
        "key": "minor_mending",
        "name": "Rétablissement Mineur",
        "world": "mithril-quest",
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
            "heal",
            "single-target"
        ],
        "availableInEras": [
            "ancient-age",
            "age-of-heroes"
        ],
        "shortSummary": "Soigne de très petites blessures et écorchures.",
        "description": "Une lueur douce referme les petites entailles, écorchures et bleus. Ce sort ne peut pas restaurer une créature à plus de la moitié de ses points de vie maximum."
    },
    {
        "key": "aegis_shell",
        "name": "Coquille d’Égide",
        "world": "mithril-quest",
        "tier": "tier1",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "self",
            "value": "rayon 3 m"
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
            "age-of-heroes",
            "high-kingdoms"
        ],
        "shortSummary": "Un bouclier d’énergie réduit les dégâts physiques.",
        "description": "Une coquille translucide enveloppe le lanceur. Tant que le sort dure, les attaques physiques qui le touchent infligent légèrement moins de dégâts, comme si une partie de la force était absorbée par l’aura."
    },
    {
        "key": "healing_touch",
        "name": "Toucher Guérisseur",
        "world": "mithril-quest",
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
        "shortSummary": "Transfère une énergie curative dans la cible.",
        "description": "Une énergie chaude circule du lanceur vers la créature touchée, refermant plaies simples, contusions et fractures légères. Le sort est surtout utilisé entre deux combats ou par les novices de la foi."
    },
    {
        "key": "mana_barrier",
        "name": "Barrière de Mana",
        "world": "mithril-quest",
        "tier": "tier2",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "self",
            "value": "rayon 3 m"
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
        "shortSummary": "Une bulle protectrice absorbe plusieurs attaques.",
        "description": "Le lanceur crée une sphère brillante qui flotte autour de lui. La barrière absorbe une partie des dégâts subis par le lanceur et les créatures alliées proches avant de se dissiper."
    },
    {
        "key": "healing_wave",
        "name": "Vague de Guérison",
        "world": "mithril-quest",
        "tier": "tier2",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "6 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true
        },
        "tags": [
            "heal",
            "area-large",
            "multi-target"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Une vague d’énergie soigne les alliés proches.",
        "description": "Un anneau de lumière verte se propage autour du lanceur, refermant plusieurs blessures légères sur toutes les créatures alliées dans la zone."
    },
    {
        "key": "ward_against_dark",
        "name": "Protection contre les Ténèbres",
        "world": "mithril-quest",
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
            "dark-age",
            "high-kingdoms"
        ],
        "shortSummary": "Repousse légèrement les énergies nécrotiques.",
        "description": "Une aura pâle entoure la cible, réduisant les effets de la magie nécrotique et atténuant la terreur inspirée par les morts-vivants mineurs."
    },
    {
        "key": "aura_of_sanctity",
        "name": "Aura de Sanctité",
        "world": "mithril-quest",
        "tier": "tier3",
        "school": "spiritbond",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9 m"
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
        "shortSummary": "Protège les alliés contre malédictions & peur.",
        "description": "Une aura lumineuse s’étend à partir du lanceur. Les alliés dans la zone voient leur esprit renforcé contre les malédictions, les effets de peur et l’influence des entités ténébreuses."
    },
    {
        "key": "greater_heal",
        "name": "Guérison Supérieure",
        "world": "mithril-quest",
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
            "high-kingdoms",
            "mythic-age"
        ],
        "shortSummary": "Restaure une grande quantité de vitalité.",
        "description": "Une lumière intense enveloppe la cible, refermant immédiatement de nombreuses blessures, ressoudant les os brisés et supprimant une fatigue extrême."
    },
    {
        "key": "cleanse_affliction",
        "name": "Purge d’Affliction",
        "world": "mithril-quest",
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
            "verbal": true
        },
        "tags": [
            "debuff",
            "heal",
            "single-target"
        ],
        "availableInEras": [
            "age-of-heroes",
            "high-kingdoms"
        ],
        "shortSummary": "Annule poisons, maladies et malédictions modestes.",
        "description": "Une onde de lumière pure traverse la cible, dissipant la plupart des venins simples, des maladies surnaturelles faibles et des malédictions de bas niveau."
    },
    {
        "key": "diamond_skin",
        "name": "Peau de Diamant",
        "world": "mithril-quest",
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
        "shortSummary": "La peau devient presque indestructible.",
        "description": "La chair du lanceur se durcit en cristal translucide, lui conférant une résistance extraordinaire aux armes physiques et aux projectiles. Les coups critiques semblent glisser sur sa surface mi-minérale, mi-vivante."
    },
    {
        "key": "mass_healing_aura",
        "name": "Aura de Guérison de Masse",
        "world": "mithril-quest",
        "tier": "tier4",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "12 m"
        },
        "duration": "1 minute",
        "concentration": true,
        "components": {
            "verbal": true
        },
        "tags": [
            "heal",
            "area-large",
            "multi-target"
        ],
        "availableInEras": [
            "high-kingdoms",
            "mythic-age"
        ],
        "shortSummary": "Répare de lourdes blessures sur une large zone.",
        "description": "Une pluie de lumière verte tombe autour du lanceur. Tant que le sort dure, les alliés dans la zone récupèrent régulièrement une partie de leurs forces, leurs plaies profondes se refermant progressivement."
    },
    {
        "key": "purge_corruption",
        "name": "Purge de la Corruption",
        "world": "mithril-quest",
        "tier": "tier4",
        "school": "spiritbond",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9 m"
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
            "dark-age",
            "mythic-age"
        ],
        "shortSummary": "Balaye les malédictions fortes et les énergies corrompues.",
        "description": "Une onde sacrée se répand, dissipant les possessions mineures, brisant les sceaux impies et affaiblissant fortement les malédictions puissantes dans la zone."
    },
    {
        "key": "mythic_barrier",
        "name": "Barrière Mythique",
        "world": "mithril-quest",
        "tier": "tier5",
        "school": "aethercraft",
        "castingTime": "minute",
        "range": {
            "type": "sphere",
            "value": "rayon 18 m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "fragment de cristal antique"
        },
        "tags": [
            "buff-defense",
            "area-large",
            "ritual"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Une coupole quasi impénétrable défend toute une zone.",
        "description": "Une gigantesque sphère de force se manifeste, bloquant la plupart des attaques physiques et restreignant sévèrement les effets magiques hostiles traversant sa surface."
    },
    {
        "key": "divine_restoration",
        "name": "Restauration Divine",
        "world": "mithril-quest",
        "tier": "tier5",
        "school": "vitae",
        "castingTime": "minute",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "symbole sacré d’un grand ordre"
        },
        "tags": [
            "heal",
            "single-target"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Rétablit totalement un allié.",
        "description": "Un torrent de lumière sacrée reconstruit le corps et l’esprit de la créature touchée, soignant toutes les blessures, effaçant la plupart des maladies, malédictions et épuisements, comme si elle sortait à peine d’un rêve."
    },
    {
        "key": "spark_of_vitae",
        "name": "Étincelle de Vitaé",
        "world": "mithril-quest",
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
            "heal",
            "single-target"
        ],
        "availableInEras": [
            "ancient-age"
        ],
        "shortSummary": "Rallume faiblement la vitalité d’une créature.",
        "description": "Une étincelle verte traverse la peau de la cible, apaisant une douleur et redonnant juste assez d’énergie pour qu’elle se relève."
    },
    {
        "key": "restoring_prayer",
        "name": "Prière Rétablissante",
        "world": "mithril-quest",
        "tier": "tier1",
        "school": "spiritbond",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "3 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true
        },
        "tags": [
            "heal",
            "area-large",
            "multi-target"
        ],
        "availableInEras": [
            "age-of-heroes"
        ],
        "shortSummary": "Une courte prière soigne légèrement plusieurs alliés.",
        "description": "Le lanceur murmure une invocation aux esprits bienveillants. Ceux-ci répondent par une vague de chaleur douce qui traverse les blessures superficielles des compagnons proches."
    },
    {
        "key": "renewing_flow",
        "name": "Flux Régénérant",
        "world": "mithril-quest",
        "tier": "tier2",
        "school": "vitae",
        "castingTime": "ten-minutes",
        "range": {
            "type": "radius",
            "value": "6 m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "heal",
            "area-large",
            "ritual"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Crée une zone où les blessures se referment lentement.",
        "description": "Pendant toute la durée du sort, les créatures alliées qui se reposent dans la zone ressentent une douce pulsation dans leurs veines, comme un second cœur qui accélère la convalescence."
    },
    {
        "key": "lesser_restoration_mq",
        "name": "Restauration Mineure MQ",
        "world": "mithril-quest",
        "tier": "tier2",
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
            "debuff",
            "single-target"
        ],
        "availableInEras": [
            "age-of-heroes",
            "high-kingdoms"
        ],
        "shortSummary": "Supprime un affaiblissement modéré.",
        "description": "Le sort dissipe un poison mineur, une fièvre surnaturelle, une cécité ou une surdité causée par la magie, mais laisse les malédictions plus profondes intactes."
    },
    {
        "key": "reviving_bond",
        "name": "Lien Revivifiant",
        "world": "mithril-quest",
        "tier": "tier3",
        "school": "spiritbond",
        "castingTime": "minute",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "mèche de cheveux ou souvenir de la cible"
        },
        "tags": [
            "heal",
            "single-target"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Ramène une créature mourante à la vie consciente.",
        "description": "Le sort arrache l’âme de la cible au bord du gouffre, la rattachant au monde matériel. La créature revient à la vie avec une santé fragile mais un esprit pleinement éveillé."
    },
    {
        "key": "purifying_rain",
        "name": "Pluie Purificatrice",
        "world": "mithril-quest",
        "tier": "tier3",
        "school": "vitae",
        "castingTime": "minute",
        "range": {
            "type": "radius",
            "value": "9 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "heal",
            "debuff",
            "area-large"
        ],
        "availableInEras": [
            "high-kingdoms",
            "mythic-age"
        ],
        "shortSummary": "Une pluie sacrée soigne et nettoie les alliés.",
        "description": "De fines gouttes de lumière tombent sur la zone, soignant des blessures modérées et lavant de nombreux effets malsains : fatigue, altérations mineures et certains poisons."
    },
    {
        "key": "regrowth",
        "name": "Renaissance des Chairs",
        "world": "mithril-quest",
        "tier": "tier4",
        "school": "wildgrowth",
        "castingTime": "hour",
        "range": {
            "type": "touch",
            "value": "contact"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "semence d’arbre ancien"
        },
        "tags": [
            "heal",
            "single-target"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Fait repousser membres, yeux ou organes perdus.",
        "description": "Le sort déclenche une croissance organique rapide, tissant muscles, nerfs et os à partir de l’énergie vitale de la cible et du pouvoir de la nature."
    },
    {
        "key": "worlds_embrace",
        "name": "Étreinte des Mondes",
        "world": "mithril-quest",
        "tier": "tier5",
        "school": "vitae",
        "castingTime": "hour",
        "range": {
            "type": "radius",
            "value": "18 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "relique d’un sanctuaire majeur"
        },
        "tags": [
            "heal",
            "area-large",
            "multi-target",
            "ritual"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Un miracle restaure entièrement une troupe entière.",
        "description": "Un réseau de lignes de force relie toutes les créatures alliées dans la zone. Chacune reçoit une part égale d’une énergie de guérison quasi divine, refermant toutes les blessures, brisant la fatigue et insufflant un espoir indestructible."
    },
    {
        "key": "ember_dart",
        "name": "Dard de Braise",
        "world": "mithril-quest",
        "tier": "cantrip",
        "school": "pyromancy",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "9 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage",
            "damage-fire",
            "single-target"
        ],
        "availableInEras": [
            "ancient-age",
            "age-of-heroes"
        ],
        "shortSummary": "Un petit projectile de feu brûle légèrement une cible.",
        "description": "Le lanceur expédie une étincelle brûlante qui frappe une créature à portée, infligeant de modestes brûlures et éclairant brièvement la zone."
    },
    {
        "key": "shadow_lash",
        "name": "Fouet d’Ombre",
        "world": "mithril-quest",
        "tier": "cantrip",
        "school": "umbramancy",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "3 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true
        },
        "tags": [
            "damage",
            "damage-necrotic",
            "single-target"
        ],
        "availableInEras": [
            "dark-age"
        ],
        "shortSummary": "Un éclat d’ombre lacère l’âme d’un adversaire.",
        "description": "Une lanière de ténèbres jaillit de la main du lanceur, frappant la cible d’une morsure glaciale qui entame légèrement sa vitalité."
    },
    {
        "key": "flame_burst",
        "name": "Explosion de Flammes",
        "world": "mithril-quest",
        "tier": "tier1",
        "school": "pyromancy",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "rayon 3 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage",
            "damage-fire",
            "area-large",
            "multi-target"
        ],
        "availableInEras": [
            "age-of-heroes",
            "high-kingdoms"
        ],
        "shortSummary": "Une petite déflagration embrase une zone proche.",
        "description": "Le lanceur fait éclater une boule de feu compacte qui embrase brièvement un petit secteur, provoquant brûlures et flammes vacillantes sur les surfaces inflammables."
    },
    {
        "key": "frost_grasp",
        "name": "Poigne de Givre",
        "world": "mithril-quest",
        "tier": "tier1",
        "school": "frostbinding",
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
            "damage",
            "damage-cold",
            "control",
            "single-target"
        ],
        "availableInEras": [
            "ancient-age",
            "age-of-heroes"
        ],
        "shortSummary": "Gèle partiellement la cible et ralentit ses mouvements.",
        "description": "La main du lanceur se couvre de glace et transmet un froid mordant à la cible, engourdissant ses membres et freinant ses mouvements pour un court instant."
    },
    {
        "key": "storm_lance",
        "name": "Lance de Tempête",
        "world": "mithril-quest",
        "tier": "tier2",
        "school": "stormcalling",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "18 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage",
            "damage-lightning",
            "single-target"
        ],
        "availableInEras": [
            "age-of-heroes",
            "high-kingdoms"
        ],
        "shortSummary": "Un trait d’éclair transperce un ennemi.",
        "description": "Une lance de foudre pure jaillit de la main du lanceur et traverse l’air en un instant, électrifiant violemment la créature visée et laissant une odeur d’ozone."
    },
    {
        "key": "grasping_roots",
        "name": "Racines Enserrantes",
        "world": "mithril-quest",
        "tier": "tier2",
        "school": "wildgrowth",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "6 m"
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
            "ancient-age",
            "dark-age"
        ],
        "shortSummary": "Des racines sortent du sol et immobilisent les ennemis.",
        "description": "Le sol se fissure et laisse jaillir des racines, lianes et herbes épaisses qui saisissent les jambes des créatures ennemies, rendant leur progression difficile voire impossible."
    },
    {
        "key": "sunlance",
        "name": "Lance Solaire",
        "world": "mithril-quest",
        "tier": "tier3",
        "school": "vitae",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "18 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "symbole sacré"
        },
        "tags": [
            "damage",
            "damage-radiant",
            "single-target"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Un rayon sacré transperce un ennemi, terrible pour les morts-vivants.",
        "description": "Un faisceau d’une blancheur brûlante frappe la cible choisie. Les morts-vivants, démons et créatures de l’ombre subissent des dégâts terribles de cette lumière sanctifiée."
    },
    {
        "key": "shadow_prison",
        "name": "Prison d’Ombre",
        "world": "mithril-quest",
        "tier": "tier3",
        "school": "umbramancy",
        "castingTime": "action",
        "range": {
            "type": "sphere",
            "value": "rayon 6 m"
        },
        "duration": "1 minute",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "control",
            "fear",
            "area-large"
        ],
        "availableInEras": [
            "dark-age",
            "mythic-age"
        ],
        "shortSummary": "Une cage d’ombre immobilise et terrifie les ennemis.",
        "description": "Des barreaux d’ombre se forment autour d’une zone, obscurcissant la lumière et remplissant l’air de murmures malveillants. Les créatures piégées se sentent enfermées et oppressées."
    },
    {
        "key": "meteor_shower",
        "name": "Pluie de Météores",
        "world": "mithril-quest",
        "tier": "tier4",
        "school": "pyromancy",
        "castingTime": "minute",
        "range": {
            "type": "radius",
            "value": "12 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "poussière de météorite"
        },
        "tags": [
            "damage",
            "damage-fire",
            "area-large",
            "multi-target",
            "ritual"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Une pluie de roches enflammées ravage un vaste secteur.",
        "description": "Le ciel s’ouvre brièvement et laisse tomber plusieurs fragments ardents qui s’écrasent sur le champ de bataille, incendiant le terrain et pulvérisant les défenses."
    },
    {
        "key": "tempest_maelstrom",
        "name": "Maelström de Tempête",
        "world": "mithril-quest",
        "tier": "tier4",
        "school": "stormcalling",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9 m"
        },
        "duration": "1 minute",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "damage",
            "damage-lightning",
            "area-large",
            "control"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Un vortex de vents et d’éclairs déchire toute une zone.",
        "description": "Des bourrasques hurlantes et des éclairs chaotiques tourbillonnent autour d’un point choisi, bousculant violemment les créatures et frappant au hasard de décharges électriques."
    },
    {
        "key": "starfall_cataclysm",
        "name": "Cataclysme d’Étoiles",
        "world": "mithril-quest",
        "tier": "tier5",
        "school": "aethercraft",
        "castingTime": "hour",
        "range": {
            "type": "radius",
            "value": "24 m"
        },
        "duration": "instantané",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "fragment d’astrolabe antique"
        },
        "tags": [
            "damage",
            "area-large",
            "multi-target",
            "ritual"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Un appel cosmique fait tomber plusieurs astres sur le champ de bataille.",
        "description": "Le mage se synchronise avec les cieux et détourne la course de plusieurs fragments stellaires. Ils s’écrasent dans un fracas apocalyptique, remodelant le terrain et laissant derrière eux des cratères encore fumants."
    },
    {
        "key": "mage_light",
        "name": "Lumière du Mage",
        "world": "mithril-quest",
        "tier": "cantrip",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "touch",
            "value": "objet touché"
        },
        "duration": "1 heure",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "vision"
        ],
        "availableInEras": [
            "ancient-age",
            "age-of-heroes"
        ],
        "shortSummary": "Fait briller un objet comme une torche douce.",
        "description": "Le sort imprègne un objet d’une lueur stable, permettant d’explorer les cavernes ou de lire dans l’obscurité sans fumée ni chaleur."
    },
    {
        "key": "minor_telekinesis",
        "name": "Télékinésie Mineure",
        "world": "mithril-quest",
        "tier": "cantrip",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "line",
            "value": "9 m"
        },
        "duration": "1 round",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "movement"
        ],
        "availableInEras": [
            "high-kingdoms"
        ],
        "shortSummary": "Déplace brièvement de petits objets à distance.",
        "description": "Le lanceur peut soulever ou tirer un objet léger à portée, ouvrir une porte déverrouillée ou renverser un petit récipient sans le toucher."
    },
    {
        "key": "detect_magic_mq",
        "name": "Détection de Magie MQ",
        "world": "mithril-quest",
        "tier": "tier1",
        "school": "aethercraft",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "9 m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "vision"
        ],
        "availableInEras": [
            "age-of-heroes",
            "high-kingdoms"
        ],
        "shortSummary": "Révèle les auras magiques autour du lanceur.",
        "description": "Les flux arcaniques deviennent visibles sous la forme de filaments colorés, indiquant la présence d’objets magiques, de glyphes ou de créatures imprégnées de pouvoir."
    },
    {
        "key": "whispering_step",
        "name": "Pas Murmurant",
        "world": "mithril-quest",
        "tier": "tier1",
        "school": "mindweave",
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
            "dark-age",
            "high-kingdoms"
        ],
        "shortSummary": "Assourdit les pas et rend la démarche plus discrète.",
        "description": "Une fine pellicule psychique amortit les sons produits par le lanceur, facilitant les déplacements furtifs, surtout dans les couloirs ou les ruelles calmes."
    },
    {
        "key": "veil_of_silence",
        "name": "Voile de Silence",
        "world": "mithril-quest",
        "tier": "tier2",
        "school": "mindweave",
        "castingTime": "action",
        "range": {
            "type": "radius",
            "value": "6 m"
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
            "dark-age"
        ],
        "shortSummary": "Crée une bulle où aucun son ne franchit les limites.",
        "description": "Les conversations à l’intérieur du voile ne peuvent pas être entendues depuis l’extérieur, et les bruits entrants sont également étouffés, offrant une excellente discrétion… ou un piège silencieux."
    },
    {
        "key": "wind_step",
        "name": "Foulée du Vent",
        "world": "mithril-quest",
        "tier": "tier2",
        "school": "stormcalling",
        "castingTime": "bonus-action",
        "range": {
            "type": "self",
            "value": "—"
        },
        "duration": "1 minute",
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
            "age-of-heroes",
            "high-kingdoms"
        ],
        "shortSummary": "Augmente considérablement la vitesse de déplacement.",
        "description": "Des bourrasques invisibles poussent le lanceur vers l’avant, lui permettant de couvrir rapidement une grande distance, de bondir par-dessus des obstacles ou de se replier en sécurité."
    },
    {
        "key": "blink_stride",
        "name": "Foulée Scintillante",
        "world": "mithril-quest",
        "tier": "tier3",
        "school": "aethercraft",
        "castingTime": "bonus-action",
        "range": {
            "type": "self",
            "value": "—"
        },
        "duration": "1 round",
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
            "high-kingdoms"
        ],
        "shortSummary": "Le lanceur se téléporte sur une courte distance.",
        "description": "En un clignement d’œil, le mage disparaît dans une étincelle bleutée et réapparaît quelques mètres plus loin, évitant parfois une attaque ou traversant un obstacle léger."
    },
    {
        "key": "group_pathway",
        "name": "Passage de Groupe",
        "world": "mithril-quest",
        "tier": "tier3",
        "school": "terraforge",
        "castingTime": "minute",
        "range": {
            "type": "radius",
            "value": "9 m"
        },
        "duration": "10 minutes",
        "concentration": true,
        "components": {
            "verbal": true,
            "somatic": true
        },
        "tags": [
            "movement",
            "buff-utility",
            "area-large"
        ],
        "availableInEras": [
            "high-kingdoms",
            "mythic-age"
        ],
        "shortSummary": "Aplanit le terrain et crée un chemin sûr pour un groupe.",
        "description": "Le sol se nivelle, les pierres se rangent sur le côté et les épines reculent, traçant un couloir de marche claire qui suit les pas du groupe pendant toute la durée du sort."
    },
    {
        "key": "sanctum_sigil",
        "name": "Sigil de Sanctuaire",
        "world": "mithril-quest",
        "tier": "tier4",
        "school": "spiritbond",
        "castingTime": "hour",
        "range": {
            "type": "radius",
            "value": "18 m"
        },
        "duration": "24 heures",
        "concentration": false,
        "components": {
            "verbal": true,
            "somatic": true,
            "material": "encens rare et craie consacrée"
        },
        "tags": [
            "buff-defense",
            "ritual",
            "area-large"
        ],
        "availableInEras": [
            "mythic-age"
        ],
        "shortSummary": "Consacre un lieu, rendant plus difficile toute intrusion hostile.",
        "description": "Le sol est marqué de glyphes lumineux. Les créatures hostiles ressentent un malaise en entrant, tandis que les alliés bénéficient d’un léger sentiment de sécurité et de clarté d’esprit."
    }
];
