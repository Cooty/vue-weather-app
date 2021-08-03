import {defineConfig} from 'vite'
import {createVuePlugin} from 'vite-plugin-vue2'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.BASE_URL ? process.env.BASE_URL : '/',
    plugins: [
        createVuePlugin(),
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ],
    chokidarWatchOptions: {
        usePolling: true
    }
})
