"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export default function AbilityBar({ abilities, selected, setSelected, onUseSelf, disabled, }) {
    return (_jsx("div", { className: "absolute bottom-3 left-1/2 z-[220] -translate-x-1/2 rounded-2xl px-3 py-2 text-xs", style: {
            background: "rgba(10,10,10,0.55)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(6px)",
            color: "rgba(245,235,210,0.95)",
            display: "flex",
            gap: 8,
        }, children: abilities.map((a) => {
            const isSel = a.id === selected;
            const isSelf = !a.requiresTarget;
            return (_jsx("button", { disabled: disabled, onClick: () => {
                    if (disabled)
                        return;
                    if (isSelf)
                        onUseSelf(a.id);
                    else
                        setSelected(a.id);
                }, title: a.desc, style: {
                    padding: "8px 10px",
                    borderRadius: 12,
                    border: isSel ? "1px solid rgba(255,220,140,0.75)" : "1px solid rgba(255,255,255,0.12)",
                    background: isSel ? "rgba(255,210,140,0.14)" : "rgba(255,255,255,0.06)",
                    cursor: disabled ? "not-allowed" : "pointer",
                    opacity: disabled ? 0.5 : 1,
                    whiteSpace: "nowrap",
                }, children: a.name }, a.id));
        }) }));
}
