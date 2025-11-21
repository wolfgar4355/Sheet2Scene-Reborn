"use client";

export default function ambient() {
    let volume = 1;

    return {
        setVolume(v: number) {
            volume = Math.max(0, Math.min(1, v));
        },
        getVolume() {
            return volume;
        }
    };
}
