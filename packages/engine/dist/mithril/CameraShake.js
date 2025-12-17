export function triggerCameraShake(distance) {
    const strength = distance === 0 ? 12 :
        distance < 200 ? 8 :
            distance < 600 ? 5 :
                2;
    const root = document.documentElement;
    root.style.setProperty("--shake", `${strength}px`);
    root.classList.add("shake");
    setTimeout(() => root.classList.remove("shake"), 300);
}
