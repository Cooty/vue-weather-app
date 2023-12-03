import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolve from "unplugin-icons/resolver";
import { BootstrapVueNextResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    // In production the `base` has to be an absolute URL of the GitHub page, where we're deploying to
    // otherwise it will throw a 404 and the app won't start.
    // The BASE_URL should be set on the CI (see .github/workflows/main.yml)
    base: process.env.BASE_URL ? process.env.BASE_URL : "/",
    plugins: [
        vue(),
        Components({
            resolvers: [BootstrapVueNextResolver(), IconsResolve()],
        }),
        Icons({
            compiler: "vue3",
            autoInstall: true,
        }),
        legacy({
            targets: ["ie >= 11"],
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
    ],
    chokidarWatchOptions: {
        usePolling: true,
    },
    test: {
        globals: true,
        environment: "happy-dom",
    },
});
