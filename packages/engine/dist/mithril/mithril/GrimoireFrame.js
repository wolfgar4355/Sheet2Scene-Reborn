"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Image from "next/image";
export default function GrimoireFrame({ scene, ambient, }) {
    return (_jsx("div", { className: `fixed bottom-0 left-0 right-0 mx-auto z-30 transition-transform duration-500
                ${scene.state ? "translate-y-0" : "translate-y-[100%]"}`, style: { maxWidth: "640px" }, children: _jsx(Image, { src: "/images/grimoire-open.png", alt: "Grimoire", width: 640, height: 480, priority: true }) }));
}
