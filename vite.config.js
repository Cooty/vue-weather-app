import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
    // In production the `base` has to be an absolute URL of the GitHub page, where we're deploying to
    // otherwise it will throw a 404 and the app won't start.
    // The BASE_URL should be set on the CI (see .github/workflows/main.yml)
    base: process.env.BASE_URL ? process.env.BASE_URL : "/",
    plugins: [
        vue(),
        legacy({
            targets: ["ie >= 11"],
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
    ],
    chokidarWatchOptions: {
        usePolling: true,
    },
});
