export function getAllClasses() {
    // @ts-ignore  — fourni par Vite/Webpack lors du build
    const context = require.context("../content/fantasy/classes", true, /\.ts$/);
    const classes = [];
    context.keys().forEach((key) => {
        // on ignore les fichiers non-data
        if (key.endsWith("types.ts"))
            return;
        if (key.endsWith("index.ts"))
            return;
        if (key.endsWith("ALL_CLASSES.ts"))
            return;
        if (key.endsWith("fix-classes.ts"))
            return;
        if (key.endsWith("generate-all-classes.ts"))
            return;
        const mod = context(key);
        const exported = mod.default ?? mod;
        if (Array.isArray(exported)) {
            classes.push(...exported);
        }
        else if (typeof exported === "object") {
            classes.push(exported);
        }
    });
    return classes;
}
