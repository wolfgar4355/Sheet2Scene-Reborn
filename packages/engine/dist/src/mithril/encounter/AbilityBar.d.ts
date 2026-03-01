import type { Ability, AbilityId } from "./useAbilities";
export default function AbilityBar({ abilities, selected, setSelected, onUseSelf, disabled, }: {
    abilities: Ability[];
    selected: AbilityId;
    setSelected: (id: AbilityId) => void;
    onUseSelf: (id: AbilityId) => void;
    disabled?: boolean;
}): JSX.Element;
