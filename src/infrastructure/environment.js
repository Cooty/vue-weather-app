// We need to use a "facade" in front of Vite's environment variable
// implementation (https://vitejs.dev/guide/env-and-mode.html)
// because Jest can't handle import.meta.env (see: https://github.com/facebook/jest/issues/9213)
// this way we can mock these variables in our unit tests.
// This approach is also handy to abstract the way env variables are handled so it will be
// easier to switch to a different build tool that for instance uses process.env
export const API_KEY = import.meta.env.VITE_API_KEY
export const MODE = import.meta.env.MODE