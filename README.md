# ⛅ Weather App

A simple client for [OpenWeatherMap](https://openweathermap.org/) API made with [Vue.js](https://vuejs.org/).

## 🔧 Usage

### 🐋 In Docker

The application has a dockerized, portable dev environment, to run the code on your machine all you need is to have [Docker](https://www.docker.com/) installed. Docker setup is mostly based on [this article](https://mherman.org/blog/dockerizing-a-react-app/).

run

```
make build-dev
```

to create the development image. This command should create an image called `vue-weather-app:dev` on your system.

now you can run it with

```
make run-dev
```

The app should be available on `http://localhost:3000/` in your browser. Code changes should reflect immediately thanks to the Hot Module Reload (HMR) feature of Vite.

If you wish to run the app on a **different port**, then you can do so by passing the `PORT` environment variable to the make command, like so:

```
make run-dev PORT=5050
```

Now the app should be available on `http://localhost:5050`

To tear down the dev environment, just exit the task running in your terminal (`Ctrl + C`) or find the container for the app (run `docker ps`), then look for the container in the list which is based on the `vue-weather-app` image) and stop the container (`docker stop <ID|NAME>`)

### 💻 Running it directly on your computer

Install dependencies
```shell
npm install
```

To run the app in development mode
```shell
npm run dev
```

To build it and start the dev-server in preview mode
```shell
npm run build && npm run serve
```

## 🏗️ Project setup

The project was scaffolded with [Vite's](https://vitejs.dev/) CLI, with the Vue.js template.

```shell
# npm 7+, extra double-dash is needed:
npm init @vitejs/app my-vue-app -- --template vue
```

We've manually reverted Vue.js's version to `2.6.14` and adjusted the `devDependencies` accordingly (switched `vite-plugin-vue` to [`vite-plugin-vue2`](https://www.npmjs.com/package/vite-plugin-vue2) and adjusted `vite.config.js` accordingly).

[`@vitejs/plugin-legacy`](https://www.npmjs.com/package/@vitejs/plugin-legacy) was added and configured to support IE11 and up (see `vite.config.js`).

### 📜 Conventions

We use the recommended coding conventions of Vue.js and setup [ESLint](https://eslint.org/) via [`eslint-plugin-vue`](https://eslint.vuejs.org/).
You can run the linter manually via NPM-scripts with

```shell
npm run lint
```

This will also fix whatever error / warning can be autofixed by ESLint.
Currently, we use the settings `plugin:vue/recommended`, for full list of rules [see here](https://eslint.vuejs.org/rules/).

General file-formatting rules are set up via [EditorConfig](https://editorconfig.org/), see `.editorconfig` for details.

#### ✍️ File naming
Files and folders should generally be named in `kebab-case`.
Exceptions are `*.vue` files and `*.js` files that export a single class, in these cases use `PascalCase`.

### 🧪 Testing

Unit testing is set up using [Jest](https://jestjs.io/) as test runner and [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro).
Test can be run with

```shell
npm run test
```

To generate coverage report, run

```shell
npm run coverage
```

### 🏛️ Architecture

The architecture mostly follows the convention for [Elegant Frontend Architecture](https://michalzalecki.com/elegant-frontend-architecture/) by Michal Zalecki.

## 🥞 Tech stack

- Framework: [Vue.js (V2)](https://vuejs.org/v2/guide/)
- UI library: [Bootstrap Vue](https://bootstrap-vue.org/)
- Build-tool and development environment: [Vite](https://vitejs.dev/)

## 🚢 Deployment
The app is currently deployed to [GitHub Pages](https://pages.github.com/), using automated GitHub actions (see `~/.github/workflows/main.yml`).

## ✅ TODOs and further ideas

- Add auto-suggest for cities
