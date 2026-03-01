export type Agent = {
    id: string;
    name: string;
    role: string;
    locale?: string;
    model?: string;
    system?: string;
};
export type AgentId = keyof typeof AGENTS;
export type AgentTask = {
    target: AgentId | string;
    severity?: "low" | "medium" | "high" | "critical";
    summary: string;
    files?: string[];
    payload?: unknown;
};
export type InternalAgentTask = Omit<AgentTask, "target"> & {
    target: AgentId;
};
export declare const AGENTS: Record<string, Agent>;
export declare const AGENT_GROUPS: Record<string, string[]>;
export declare const MQ_ITEMS: {
    accessories: {
        dataset: import("../prompts/items/accessories_prompts").MQAccessoryPrompt[];
        count: number;
        getRandom(): import("../prompts/items/accessories_prompts").MQAccessoryPrompt;
        getByCategory(category: string): import("../prompts/items/accessories_prompts").MQAccessoryPrompt[];
        get(category: string, style: string, theme: string, palette: string): import("../prompts/items/accessories_prompts").MQAccessoryPrompt | undefined;
    };
    armors: {
        dataset: readonly [{
            readonly category: "light";
            readonly style: "leather-forged";
            readonly palette: "umber";
            readonly prompt: "Armure légère en cuir tanné sombre, coutures renforcées, plastron souple, boucles usées, silhouette agile, ambiance parchemin nocturne MQ.";
        }, {
            readonly category: "light";
            readonly style: "scout-woven";
            readonly palette: "moss";
            readonly prompt: "Armure d’éclaireur tissée de fibres naturelles, teintes vert mousse, motifs runiques subtils, style grimoire forestier MQ.";
        }, {
            readonly category: "light";
            readonly style: "arcane-threaded";
            readonly palette: "violet-arcane";
            readonly prompt: "Cuir léger infusé d’arcanes, filaments violets brillants, couture magique, look mystique mais discret.";
        }, {
            readonly category: "medium";
            readonly style: "scale-hybrid";
            readonly palette: "steel-gray";
            readonly prompt: "Armure d’écailles hybrides métal/cuir, gris acier, reflets doux, géométrie disciplinée, style Royaume-Haut MQ.";
        }, {
            readonly category: "medium";
            readonly style: "ranger-plate";
            readonly palette: "fir-green";
            readonly prompt: "Armure intermédiaire de rôdeur, métal léger, plaque thoracique stylisée, accents verts forêt, design fonctionnel MQ.";
        }, {
            readonly category: "medium";
            readonly style: "stormwoven";
            readonly palette: "blue-tempest";
            readonly prompt: "Armure de combat infusée d’énergie tempête, teintes bleues électriques, symboles d’orage gravés.";
        }, {
            readonly category: "heavy";
            readonly style: "titan-forged";
            readonly palette: "iron";
            readonly prompt: "Armure lourde forgée anciennement, plaques massives, engravures titanesques, aspect monumental, style MQ.";
        }, {
            readonly category: "heavy";
            readonly style: "cathedral-plate";
            readonly palette: "golden-light";
            readonly prompt: "Plastron religieux or pâle, lignes architecturales, aura lumineuse subtile, design divin MQ.";
        }, {
            readonly category: "heavy";
            readonly style: "obsidian-bastion";
            readonly palette: "blackstone";
            readonly prompt: "Armure noire taillée dans pierre-obsidienne vivante, reflets violets, look sombre et imposant.";
        }, {
            readonly category: "mystic";
            readonly style: "runelocked";
            readonly palette: "ancient-gold";
            readonly prompt: "Armure mystérieuse ornée de runes verrouillées, éclats dorés anciens, énergie contenue sous les plaques.";
        }, {
            readonly category: "mystic";
            readonly style: "ethermail";
            readonly palette: "soft-teal";
            readonly prompt: "Cotte de mailles éthérées semi-translucides, teintes bleu-vert, effet spectral, ambiance arcane MQ.";
        }, {
            readonly category: "mystic";
            readonly style: "moonwoven";
            readonly palette: "silver-lunar";
            readonly prompt: "Armure mystique imprégnée de lumière lunaire, motifs délicats, emballée d’un halo argenté doux.";
        }, {
            readonly category: "mythic";
            readonly style: "celestial-aegis";
            readonly palette: "radiant-gold";
            readonly prompt: "Armure mythique forgée dans lumière céleste, plaques brillantes, contours divins, esthétique MQ mythique.";
        }, {
            readonly category: "mythic";
            readonly style: "astral-plate";
            readonly palette: "nebula-blue";
            readonly prompt: "Armure astrale, reflets nébuleux, motifs cosmiques, énergie pure dans les jointures, halo spatial MQ.";
        }, {
            readonly category: "mythic";
            readonly style: "voidcarved";
            readonly palette: "abyssal-purple";
            readonly prompt: "Armure mythique taillée dans matière du Vide, aura sombre vibrante, gravures abyssales, style MQ.";
        }];
        count: 15;
        getRandom(): {
            readonly category: "light";
            readonly style: "leather-forged";
            readonly palette: "umber";
            readonly prompt: "Armure légère en cuir tanné sombre, coutures renforcées, plastron souple, boucles usées, silhouette agile, ambiance parchemin nocturne MQ.";
        } | {
            readonly category: "light";
            readonly style: "scout-woven";
            readonly palette: "moss";
            readonly prompt: "Armure d’éclaireur tissée de fibres naturelles, teintes vert mousse, motifs runiques subtils, style grimoire forestier MQ.";
        } | {
            readonly category: "light";
            readonly style: "arcane-threaded";
            readonly palette: "violet-arcane";
            readonly prompt: "Cuir léger infusé d’arcanes, filaments violets brillants, couture magique, look mystique mais discret.";
        } | {
            readonly category: "medium";
            readonly style: "scale-hybrid";
            readonly palette: "steel-gray";
            readonly prompt: "Armure d’écailles hybrides métal/cuir, gris acier, reflets doux, géométrie disciplinée, style Royaume-Haut MQ.";
        } | {
            readonly category: "medium";
            readonly style: "ranger-plate";
            readonly palette: "fir-green";
            readonly prompt: "Armure intermédiaire de rôdeur, métal léger, plaque thoracique stylisée, accents verts forêt, design fonctionnel MQ.";
        } | {
            readonly category: "medium";
            readonly style: "stormwoven";
            readonly palette: "blue-tempest";
            readonly prompt: "Armure de combat infusée d’énergie tempête, teintes bleues électriques, symboles d’orage gravés.";
        } | {
            readonly category: "heavy";
            readonly style: "titan-forged";
            readonly palette: "iron";
            readonly prompt: "Armure lourde forgée anciennement, plaques massives, engravures titanesques, aspect monumental, style MQ.";
        } | {
            readonly category: "heavy";
            readonly style: "cathedral-plate";
            readonly palette: "golden-light";
            readonly prompt: "Plastron religieux or pâle, lignes architecturales, aura lumineuse subtile, design divin MQ.";
        } | {
            readonly category: "heavy";
            readonly style: "obsidian-bastion";
            readonly palette: "blackstone";
            readonly prompt: "Armure noire taillée dans pierre-obsidienne vivante, reflets violets, look sombre et imposant.";
        } | {
            readonly category: "mystic";
            readonly style: "runelocked";
            readonly palette: "ancient-gold";
            readonly prompt: "Armure mystérieuse ornée de runes verrouillées, éclats dorés anciens, énergie contenue sous les plaques.";
        } | {
            readonly category: "mystic";
            readonly style: "ethermail";
            readonly palette: "soft-teal";
            readonly prompt: "Cotte de mailles éthérées semi-translucides, teintes bleu-vert, effet spectral, ambiance arcane MQ.";
        } | {
            readonly category: "mystic";
            readonly style: "moonwoven";
            readonly palette: "silver-lunar";
            readonly prompt: "Armure mystique imprégnée de lumière lunaire, motifs délicats, emballée d’un halo argenté doux.";
        } | {
            readonly category: "mythic";
            readonly style: "celestial-aegis";
            readonly palette: "radiant-gold";
            readonly prompt: "Armure mythique forgée dans lumière céleste, plaques brillantes, contours divins, esthétique MQ mythique.";
        } | {
            readonly category: "mythic";
            readonly style: "astral-plate";
            readonly palette: "nebula-blue";
            readonly prompt: "Armure astrale, reflets nébuleux, motifs cosmiques, énergie pure dans les jointures, halo spatial MQ.";
        } | {
            readonly category: "mythic";
            readonly style: "voidcarved";
            readonly palette: "abyssal-purple";
            readonly prompt: "Armure mythique taillée dans matière du Vide, aura sombre vibrante, gravures abyssales, style MQ.";
        };
        getByCategory(category: string): ({
            readonly category: "light";
            readonly style: "leather-forged";
            readonly palette: "umber";
            readonly prompt: "Armure légère en cuir tanné sombre, coutures renforcées, plastron souple, boucles usées, silhouette agile, ambiance parchemin nocturne MQ.";
        } | {
            readonly category: "light";
            readonly style: "scout-woven";
            readonly palette: "moss";
            readonly prompt: "Armure d’éclaireur tissée de fibres naturelles, teintes vert mousse, motifs runiques subtils, style grimoire forestier MQ.";
        } | {
            readonly category: "light";
            readonly style: "arcane-threaded";
            readonly palette: "violet-arcane";
            readonly prompt: "Cuir léger infusé d’arcanes, filaments violets brillants, couture magique, look mystique mais discret.";
        } | {
            readonly category: "medium";
            readonly style: "scale-hybrid";
            readonly palette: "steel-gray";
            readonly prompt: "Armure d’écailles hybrides métal/cuir, gris acier, reflets doux, géométrie disciplinée, style Royaume-Haut MQ.";
        } | {
            readonly category: "medium";
            readonly style: "ranger-plate";
            readonly palette: "fir-green";
            readonly prompt: "Armure intermédiaire de rôdeur, métal léger, plaque thoracique stylisée, accents verts forêt, design fonctionnel MQ.";
        } | {
            readonly category: "medium";
            readonly style: "stormwoven";
            readonly palette: "blue-tempest";
            readonly prompt: "Armure de combat infusée d’énergie tempête, teintes bleues électriques, symboles d’orage gravés.";
        } | {
            readonly category: "heavy";
            readonly style: "titan-forged";
            readonly palette: "iron";
            readonly prompt: "Armure lourde forgée anciennement, plaques massives, engravures titanesques, aspect monumental, style MQ.";
        } | {
            readonly category: "heavy";
            readonly style: "cathedral-plate";
            readonly palette: "golden-light";
            readonly prompt: "Plastron religieux or pâle, lignes architecturales, aura lumineuse subtile, design divin MQ.";
        } | {
            readonly category: "heavy";
            readonly style: "obsidian-bastion";
            readonly palette: "blackstone";
            readonly prompt: "Armure noire taillée dans pierre-obsidienne vivante, reflets violets, look sombre et imposant.";
        } | {
            readonly category: "mystic";
            readonly style: "runelocked";
            readonly palette: "ancient-gold";
            readonly prompt: "Armure mystérieuse ornée de runes verrouillées, éclats dorés anciens, énergie contenue sous les plaques.";
        } | {
            readonly category: "mystic";
            readonly style: "ethermail";
            readonly palette: "soft-teal";
            readonly prompt: "Cotte de mailles éthérées semi-translucides, teintes bleu-vert, effet spectral, ambiance arcane MQ.";
        } | {
            readonly category: "mystic";
            readonly style: "moonwoven";
            readonly palette: "silver-lunar";
            readonly prompt: "Armure mystique imprégnée de lumière lunaire, motifs délicats, emballée d’un halo argenté doux.";
        } | {
            readonly category: "mythic";
            readonly style: "celestial-aegis";
            readonly palette: "radiant-gold";
            readonly prompt: "Armure mythique forgée dans lumière céleste, plaques brillantes, contours divins, esthétique MQ mythique.";
        } | {
            readonly category: "mythic";
            readonly style: "astral-plate";
            readonly palette: "nebula-blue";
            readonly prompt: "Armure astrale, reflets nébuleux, motifs cosmiques, énergie pure dans les jointures, halo spatial MQ.";
        } | {
            readonly category: "mythic";
            readonly style: "voidcarved";
            readonly palette: "abyssal-purple";
            readonly prompt: "Armure mythique taillée dans matière du Vide, aura sombre vibrante, gravures abyssales, style MQ.";
        })[];
        get(category: string, style: string, theme: string, palette: string): {
            readonly category: "light";
            readonly style: "leather-forged";
            readonly palette: "umber";
            readonly prompt: "Armure légère en cuir tanné sombre, coutures renforcées, plastron souple, boucles usées, silhouette agile, ambiance parchemin nocturne MQ.";
        } | {
            readonly category: "light";
            readonly style: "scout-woven";
            readonly palette: "moss";
            readonly prompt: "Armure d’éclaireur tissée de fibres naturelles, teintes vert mousse, motifs runiques subtils, style grimoire forestier MQ.";
        } | {
            readonly category: "light";
            readonly style: "arcane-threaded";
            readonly palette: "violet-arcane";
            readonly prompt: "Cuir léger infusé d’arcanes, filaments violets brillants, couture magique, look mystique mais discret.";
        } | {
            readonly category: "medium";
            readonly style: "scale-hybrid";
            readonly palette: "steel-gray";
            readonly prompt: "Armure d’écailles hybrides métal/cuir, gris acier, reflets doux, géométrie disciplinée, style Royaume-Haut MQ.";
        } | {
            readonly category: "medium";
            readonly style: "ranger-plate";
            readonly palette: "fir-green";
            readonly prompt: "Armure intermédiaire de rôdeur, métal léger, plaque thoracique stylisée, accents verts forêt, design fonctionnel MQ.";
        } | {
            readonly category: "medium";
            readonly style: "stormwoven";
            readonly palette: "blue-tempest";
            readonly prompt: "Armure de combat infusée d’énergie tempête, teintes bleues électriques, symboles d’orage gravés.";
        } | {
            readonly category: "heavy";
            readonly style: "titan-forged";
            readonly palette: "iron";
            readonly prompt: "Armure lourde forgée anciennement, plaques massives, engravures titanesques, aspect monumental, style MQ.";
        } | {
            readonly category: "heavy";
            readonly style: "cathedral-plate";
            readonly palette: "golden-light";
            readonly prompt: "Plastron religieux or pâle, lignes architecturales, aura lumineuse subtile, design divin MQ.";
        } | {
            readonly category: "heavy";
            readonly style: "obsidian-bastion";
            readonly palette: "blackstone";
            readonly prompt: "Armure noire taillée dans pierre-obsidienne vivante, reflets violets, look sombre et imposant.";
        } | {
            readonly category: "mystic";
            readonly style: "runelocked";
            readonly palette: "ancient-gold";
            readonly prompt: "Armure mystérieuse ornée de runes verrouillées, éclats dorés anciens, énergie contenue sous les plaques.";
        } | {
            readonly category: "mystic";
            readonly style: "ethermail";
            readonly palette: "soft-teal";
            readonly prompt: "Cotte de mailles éthérées semi-translucides, teintes bleu-vert, effet spectral, ambiance arcane MQ.";
        } | {
            readonly category: "mystic";
            readonly style: "moonwoven";
            readonly palette: "silver-lunar";
            readonly prompt: "Armure mystique imprégnée de lumière lunaire, motifs délicats, emballée d’un halo argenté doux.";
        } | {
            readonly category: "mythic";
            readonly style: "celestial-aegis";
            readonly palette: "radiant-gold";
            readonly prompt: "Armure mythique forgée dans lumière céleste, plaques brillantes, contours divins, esthétique MQ mythique.";
        } | {
            readonly category: "mythic";
            readonly style: "astral-plate";
            readonly palette: "nebula-blue";
            readonly prompt: "Armure astrale, reflets nébuleux, motifs cosmiques, énergie pure dans les jointures, halo spatial MQ.";
        } | {
            readonly category: "mythic";
            readonly style: "voidcarved";
            readonly palette: "abyssal-purple";
            readonly prompt: "Armure mythique taillée dans matière du Vide, aura sombre vibrante, gravures abyssales, style MQ.";
        } | undefined;
    };
};
export declare const registry: {
    AGENTS: Record<string, Agent>;
    AGENT_GROUPS: Record<string, string[]>;
    MQ_ITEMS: {
        accessories: {
            dataset: import("../prompts/items/accessories_prompts").MQAccessoryPrompt[];
            count: number;
            getRandom(): import("../prompts/items/accessories_prompts").MQAccessoryPrompt;
            getByCategory(category: string): import("../prompts/items/accessories_prompts").MQAccessoryPrompt[];
            get(category: string, style: string, theme: string, palette: string): import("../prompts/items/accessories_prompts").MQAccessoryPrompt | undefined;
        };
        armors: {
            dataset: readonly [{
                readonly category: "light";
                readonly style: "leather-forged";
                readonly palette: "umber";
                readonly prompt: "Armure légère en cuir tanné sombre, coutures renforcées, plastron souple, boucles usées, silhouette agile, ambiance parchemin nocturne MQ.";
            }, {
                readonly category: "light";
                readonly style: "scout-woven";
                readonly palette: "moss";
                readonly prompt: "Armure d’éclaireur tissée de fibres naturelles, teintes vert mousse, motifs runiques subtils, style grimoire forestier MQ.";
            }, {
                readonly category: "light";
                readonly style: "arcane-threaded";
                readonly palette: "violet-arcane";
                readonly prompt: "Cuir léger infusé d’arcanes, filaments violets brillants, couture magique, look mystique mais discret.";
            }, {
                readonly category: "medium";
                readonly style: "scale-hybrid";
                readonly palette: "steel-gray";
                readonly prompt: "Armure d’écailles hybrides métal/cuir, gris acier, reflets doux, géométrie disciplinée, style Royaume-Haut MQ.";
            }, {
                readonly category: "medium";
                readonly style: "ranger-plate";
                readonly palette: "fir-green";
                readonly prompt: "Armure intermédiaire de rôdeur, métal léger, plaque thoracique stylisée, accents verts forêt, design fonctionnel MQ.";
            }, {
                readonly category: "medium";
                readonly style: "stormwoven";
                readonly palette: "blue-tempest";
                readonly prompt: "Armure de combat infusée d’énergie tempête, teintes bleues électriques, symboles d’orage gravés.";
            }, {
                readonly category: "heavy";
                readonly style: "titan-forged";
                readonly palette: "iron";
                readonly prompt: "Armure lourde forgée anciennement, plaques massives, engravures titanesques, aspect monumental, style MQ.";
            }, {
                readonly category: "heavy";
                readonly style: "cathedral-plate";
                readonly palette: "golden-light";
                readonly prompt: "Plastron religieux or pâle, lignes architecturales, aura lumineuse subtile, design divin MQ.";
            }, {
                readonly category: "heavy";
                readonly style: "obsidian-bastion";
                readonly palette: "blackstone";
                readonly prompt: "Armure noire taillée dans pierre-obsidienne vivante, reflets violets, look sombre et imposant.";
            }, {
                readonly category: "mystic";
                readonly style: "runelocked";
                readonly palette: "ancient-gold";
                readonly prompt: "Armure mystérieuse ornée de runes verrouillées, éclats dorés anciens, énergie contenue sous les plaques.";
            }, {
                readonly category: "mystic";
                readonly style: "ethermail";
                readonly palette: "soft-teal";
                readonly prompt: "Cotte de mailles éthérées semi-translucides, teintes bleu-vert, effet spectral, ambiance arcane MQ.";
            }, {
                readonly category: "mystic";
                readonly style: "moonwoven";
                readonly palette: "silver-lunar";
                readonly prompt: "Armure mystique imprégnée de lumière lunaire, motifs délicats, emballée d’un halo argenté doux.";
            }, {
                readonly category: "mythic";
                readonly style: "celestial-aegis";
                readonly palette: "radiant-gold";
                readonly prompt: "Armure mythique forgée dans lumière céleste, plaques brillantes, contours divins, esthétique MQ mythique.";
            }, {
                readonly category: "mythic";
                readonly style: "astral-plate";
                readonly palette: "nebula-blue";
                readonly prompt: "Armure astrale, reflets nébuleux, motifs cosmiques, énergie pure dans les jointures, halo spatial MQ.";
            }, {
                readonly category: "mythic";
                readonly style: "voidcarved";
                readonly palette: "abyssal-purple";
                readonly prompt: "Armure mythique taillée dans matière du Vide, aura sombre vibrante, gravures abyssales, style MQ.";
            }];
            count: 15;
            getRandom(): {
                readonly category: "light";
                readonly style: "leather-forged";
                readonly palette: "umber";
                readonly prompt: "Armure légère en cuir tanné sombre, coutures renforcées, plastron souple, boucles usées, silhouette agile, ambiance parchemin nocturne MQ.";
            } | {
                readonly category: "light";
                readonly style: "scout-woven";
                readonly palette: "moss";
                readonly prompt: "Armure d’éclaireur tissée de fibres naturelles, teintes vert mousse, motifs runiques subtils, style grimoire forestier MQ.";
            } | {
                readonly category: "light";
                readonly style: "arcane-threaded";
                readonly palette: "violet-arcane";
                readonly prompt: "Cuir léger infusé d’arcanes, filaments violets brillants, couture magique, look mystique mais discret.";
            } | {
                readonly category: "medium";
                readonly style: "scale-hybrid";
                readonly palette: "steel-gray";
                readonly prompt: "Armure d’écailles hybrides métal/cuir, gris acier, reflets doux, géométrie disciplinée, style Royaume-Haut MQ.";
            } | {
                readonly category: "medium";
                readonly style: "ranger-plate";
                readonly palette: "fir-green";
                readonly prompt: "Armure intermédiaire de rôdeur, métal léger, plaque thoracique stylisée, accents verts forêt, design fonctionnel MQ.";
            } | {
                readonly category: "medium";
                readonly style: "stormwoven";
                readonly palette: "blue-tempest";
                readonly prompt: "Armure de combat infusée d’énergie tempête, teintes bleues électriques, symboles d’orage gravés.";
            } | {
                readonly category: "heavy";
                readonly style: "titan-forged";
                readonly palette: "iron";
                readonly prompt: "Armure lourde forgée anciennement, plaques massives, engravures titanesques, aspect monumental, style MQ.";
            } | {
                readonly category: "heavy";
                readonly style: "cathedral-plate";
                readonly palette: "golden-light";
                readonly prompt: "Plastron religieux or pâle, lignes architecturales, aura lumineuse subtile, design divin MQ.";
            } | {
                readonly category: "heavy";
                readonly style: "obsidian-bastion";
                readonly palette: "blackstone";
                readonly prompt: "Armure noire taillée dans pierre-obsidienne vivante, reflets violets, look sombre et imposant.";
            } | {
                readonly category: "mystic";
                readonly style: "runelocked";
                readonly palette: "ancient-gold";
                readonly prompt: "Armure mystérieuse ornée de runes verrouillées, éclats dorés anciens, énergie contenue sous les plaques.";
            } | {
                readonly category: "mystic";
                readonly style: "ethermail";
                readonly palette: "soft-teal";
                readonly prompt: "Cotte de mailles éthérées semi-translucides, teintes bleu-vert, effet spectral, ambiance arcane MQ.";
            } | {
                readonly category: "mystic";
                readonly style: "moonwoven";
                readonly palette: "silver-lunar";
                readonly prompt: "Armure mystique imprégnée de lumière lunaire, motifs délicats, emballée d’un halo argenté doux.";
            } | {
                readonly category: "mythic";
                readonly style: "celestial-aegis";
                readonly palette: "radiant-gold";
                readonly prompt: "Armure mythique forgée dans lumière céleste, plaques brillantes, contours divins, esthétique MQ mythique.";
            } | {
                readonly category: "mythic";
                readonly style: "astral-plate";
                readonly palette: "nebula-blue";
                readonly prompt: "Armure astrale, reflets nébuleux, motifs cosmiques, énergie pure dans les jointures, halo spatial MQ.";
            } | {
                readonly category: "mythic";
                readonly style: "voidcarved";
                readonly palette: "abyssal-purple";
                readonly prompt: "Armure mythique taillée dans matière du Vide, aura sombre vibrante, gravures abyssales, style MQ.";
            };
            getByCategory(category: string): ({
                readonly category: "light";
                readonly style: "leather-forged";
                readonly palette: "umber";
                readonly prompt: "Armure légère en cuir tanné sombre, coutures renforcées, plastron souple, boucles usées, silhouette agile, ambiance parchemin nocturne MQ.";
            } | {
                readonly category: "light";
                readonly style: "scout-woven";
                readonly palette: "moss";
                readonly prompt: "Armure d’éclaireur tissée de fibres naturelles, teintes vert mousse, motifs runiques subtils, style grimoire forestier MQ.";
            } | {
                readonly category: "light";
                readonly style: "arcane-threaded";
                readonly palette: "violet-arcane";
                readonly prompt: "Cuir léger infusé d’arcanes, filaments violets brillants, couture magique, look mystique mais discret.";
            } | {
                readonly category: "medium";
                readonly style: "scale-hybrid";
                readonly palette: "steel-gray";
                readonly prompt: "Armure d’écailles hybrides métal/cuir, gris acier, reflets doux, géométrie disciplinée, style Royaume-Haut MQ.";
            } | {
                readonly category: "medium";
                readonly style: "ranger-plate";
                readonly palette: "fir-green";
                readonly prompt: "Armure intermédiaire de rôdeur, métal léger, plaque thoracique stylisée, accents verts forêt, design fonctionnel MQ.";
            } | {
                readonly category: "medium";
                readonly style: "stormwoven";
                readonly palette: "blue-tempest";
                readonly prompt: "Armure de combat infusée d’énergie tempête, teintes bleues électriques, symboles d’orage gravés.";
            } | {
                readonly category: "heavy";
                readonly style: "titan-forged";
                readonly palette: "iron";
                readonly prompt: "Armure lourde forgée anciennement, plaques massives, engravures titanesques, aspect monumental, style MQ.";
            } | {
                readonly category: "heavy";
                readonly style: "cathedral-plate";
                readonly palette: "golden-light";
                readonly prompt: "Plastron religieux or pâle, lignes architecturales, aura lumineuse subtile, design divin MQ.";
            } | {
                readonly category: "heavy";
                readonly style: "obsidian-bastion";
                readonly palette: "blackstone";
                readonly prompt: "Armure noire taillée dans pierre-obsidienne vivante, reflets violets, look sombre et imposant.";
            } | {
                readonly category: "mystic";
                readonly style: "runelocked";
                readonly palette: "ancient-gold";
                readonly prompt: "Armure mystérieuse ornée de runes verrouillées, éclats dorés anciens, énergie contenue sous les plaques.";
            } | {
                readonly category: "mystic";
                readonly style: "ethermail";
                readonly palette: "soft-teal";
                readonly prompt: "Cotte de mailles éthérées semi-translucides, teintes bleu-vert, effet spectral, ambiance arcane MQ.";
            } | {
                readonly category: "mystic";
                readonly style: "moonwoven";
                readonly palette: "silver-lunar";
                readonly prompt: "Armure mystique imprégnée de lumière lunaire, motifs délicats, emballée d’un halo argenté doux.";
            } | {
                readonly category: "mythic";
                readonly style: "celestial-aegis";
                readonly palette: "radiant-gold";
                readonly prompt: "Armure mythique forgée dans lumière céleste, plaques brillantes, contours divins, esthétique MQ mythique.";
            } | {
                readonly category: "mythic";
                readonly style: "astral-plate";
                readonly palette: "nebula-blue";
                readonly prompt: "Armure astrale, reflets nébuleux, motifs cosmiques, énergie pure dans les jointures, halo spatial MQ.";
            } | {
                readonly category: "mythic";
                readonly style: "voidcarved";
                readonly palette: "abyssal-purple";
                readonly prompt: "Armure mythique taillée dans matière du Vide, aura sombre vibrante, gravures abyssales, style MQ.";
            })[];
            get(category: string, style: string, theme: string, palette: string): {
                readonly category: "light";
                readonly style: "leather-forged";
                readonly palette: "umber";
                readonly prompt: "Armure légère en cuir tanné sombre, coutures renforcées, plastron souple, boucles usées, silhouette agile, ambiance parchemin nocturne MQ.";
            } | {
                readonly category: "light";
                readonly style: "scout-woven";
                readonly palette: "moss";
                readonly prompt: "Armure d’éclaireur tissée de fibres naturelles, teintes vert mousse, motifs runiques subtils, style grimoire forestier MQ.";
            } | {
                readonly category: "light";
                readonly style: "arcane-threaded";
                readonly palette: "violet-arcane";
                readonly prompt: "Cuir léger infusé d’arcanes, filaments violets brillants, couture magique, look mystique mais discret.";
            } | {
                readonly category: "medium";
                readonly style: "scale-hybrid";
                readonly palette: "steel-gray";
                readonly prompt: "Armure d’écailles hybrides métal/cuir, gris acier, reflets doux, géométrie disciplinée, style Royaume-Haut MQ.";
            } | {
                readonly category: "medium";
                readonly style: "ranger-plate";
                readonly palette: "fir-green";
                readonly prompt: "Armure intermédiaire de rôdeur, métal léger, plaque thoracique stylisée, accents verts forêt, design fonctionnel MQ.";
            } | {
                readonly category: "medium";
                readonly style: "stormwoven";
                readonly palette: "blue-tempest";
                readonly prompt: "Armure de combat infusée d’énergie tempête, teintes bleues électriques, symboles d’orage gravés.";
            } | {
                readonly category: "heavy";
                readonly style: "titan-forged";
                readonly palette: "iron";
                readonly prompt: "Armure lourde forgée anciennement, plaques massives, engravures titanesques, aspect monumental, style MQ.";
            } | {
                readonly category: "heavy";
                readonly style: "cathedral-plate";
                readonly palette: "golden-light";
                readonly prompt: "Plastron religieux or pâle, lignes architecturales, aura lumineuse subtile, design divin MQ.";
            } | {
                readonly category: "heavy";
                readonly style: "obsidian-bastion";
                readonly palette: "blackstone";
                readonly prompt: "Armure noire taillée dans pierre-obsidienne vivante, reflets violets, look sombre et imposant.";
            } | {
                readonly category: "mystic";
                readonly style: "runelocked";
                readonly palette: "ancient-gold";
                readonly prompt: "Armure mystérieuse ornée de runes verrouillées, éclats dorés anciens, énergie contenue sous les plaques.";
            } | {
                readonly category: "mystic";
                readonly style: "ethermail";
                readonly palette: "soft-teal";
                readonly prompt: "Cotte de mailles éthérées semi-translucides, teintes bleu-vert, effet spectral, ambiance arcane MQ.";
            } | {
                readonly category: "mystic";
                readonly style: "moonwoven";
                readonly palette: "silver-lunar";
                readonly prompt: "Armure mystique imprégnée de lumière lunaire, motifs délicats, emballée d’un halo argenté doux.";
            } | {
                readonly category: "mythic";
                readonly style: "celestial-aegis";
                readonly palette: "radiant-gold";
                readonly prompt: "Armure mythique forgée dans lumière céleste, plaques brillantes, contours divins, esthétique MQ mythique.";
            } | {
                readonly category: "mythic";
                readonly style: "astral-plate";
                readonly palette: "nebula-blue";
                readonly prompt: "Armure astrale, reflets nébuleux, motifs cosmiques, énergie pure dans les jointures, halo spatial MQ.";
            } | {
                readonly category: "mythic";
                readonly style: "voidcarved";
                readonly palette: "abyssal-purple";
                readonly prompt: "Armure mythique taillée dans matière du Vide, aura sombre vibrante, gravures abyssales, style MQ.";
            } | undefined;
        };
    };
};
export default registry;
