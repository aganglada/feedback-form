# Feedback Form

## Tech

* Typescript
* React (w/ Contenxt and Custom Hooks)
* Styled Components (w/ Theming)
* Recharts for Graphs
* Webpack (w/ babel-loader)
* Jest and React Testing Library


## Running it locally

Clone from git

```bash
git clone git@github.com:aganglada/feedback-form.git
```

Install dependecies

```bash
yarn # or npm i
```

Run the development server

```bash
yarn dev
```

This will prompt with the http://localhost:PORT on the terminal.

## Running it in production

Run the production build

```bash
yarn build
```

And run it in a server

```bash
npx serve dist
```

This will prompt with the http://localhost:PORT on the terminal.

## Running tests

```bash
yarn test
```

This includes coverage report as well, you can open that with the following command after running tests.

```bash
open coverage/lcov-report/index.html
```