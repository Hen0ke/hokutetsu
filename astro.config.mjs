import { defineConfig } from "astro/config";

export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                additionalData: '@use "/src/styles/_variables.scss" as *;',
                },
            },
        },
    },

    site: "https://hen0ke.github.io",
    base: "/hokutetsu"
});
