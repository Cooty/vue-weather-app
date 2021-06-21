# Weather App

Coding challenge for Kloeckner.i by [Tamas Kuti](kutitamas86@gmail.com).
A simple client for [OpenWeatherMap](https://openweathermap.org/) API.

**For internal use only!**

## Usage

To run the app in development mode
```shell
npm run dev
```

to build it and start the dev-server in preview mode
```shell
npm run build && npm run serve
```

## Project setup

The project was scaffolded with [Vite's](https://vitejs.dev/) CLI, with the Vue.js template.

```shell
# npm 7+, extra double-dash is needed:
npm init @vitejs/app my-vue-app -- --template vue
```

We've manually reverted Vue.js's version to `2.6.14` and adjusted the `devDependencies` accordingly (switched `vite-plugin-vue` to [`vite-plugin-vue2`](https://www.npmjs.com/package/vite-plugin-vue2) and adjusted `vite.config.js` accordingly).

[`@vitejs/plugin-legacy`](https://www.npmjs.com/package/@vitejs/plugin-legacy) was added and configured to support IE11 and up (see `vite.config.js`).

### Conventions

We use the recommended coding conventions of Vue.js and setup [ESLint](https://eslint.org/) via [`eslint-plugin-vue`](https://eslint.vuejs.org/).
You can run the linter manually via NPM-scripts with

```shell
npm run lint
```

This will also fix whatever error / warning can be autofixed by ESLint.
Currently, we use the settings `plugin:vue/recommended`, for full list of rules [see here](https://eslint.vuejs.org/rules/).

General file-formatting rules are set up via [EditorConfig])(https://editorconfig.org/), see `.editorconfig` for details.

#### File naming
Files and folders should generally be named in `kebab-case`.
Exceptions are `*.vue` files and `*.js` files that export a single class, in these cases use `PascalCase`.

### Testing

Unit testing is set up using [Jest](https://jestjs.io/) as test runner and [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro).
Test can be run with

```shell
npm run test
```

To generate coverage report, run

```shell
npm run coverage
```

### Architecture

The architecture mostly follows the convention for [Elegant Frontend Architecture](https://michalzalecki.com/elegant-frontend-architecture/) by Michal Zalecki.

## Tech stack

- Framework: [Vue.js (V2)](https://vuejs.org/v2/guide/)
- UI library: [Bootstrap Vue](https://bootstrap-vue.org/)
- Build-tool and development environment: [Vite](https://vitejs.dev/)

## TODOs and further ideas

- Add more tests :)
  Vite's use of `import.meta.env` doesn't seem to work with Jest ([see issue](https://github.com/facebook/jest/issues/9213))
- Dockerize the application for both dev-environment and production
- Implement i18n for both UI and API
- Add dynamic icons to temperature (based on degrees and the description)
- Add unit switcher, so the user can select between metric and imperial units, since the API supports this
- Add an interactive map that displays both the City / Country or the initial random location
- Add a combo-box instead of a plain select for the country selector, where the user can start typing the name of the country and the list will filter accordingly