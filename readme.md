[![CI](https://github.com/progys/play-with-react-redux/actions/workflows/ci.yml/badge.svg)](https://github.com/progys/play-with-react-redux/actions/workflows/ci.yml)

# React + Redux playground
Draft application for playing around with React, Redux, Typescript. Using redux-thunk middleware for asynchronous calls.

## Requirements
- Node.js >= 22 (see `.nvmrc`)

## Run application
`npm run dev` - starts dev server

`npm run build` - creates production build

`npm run preview` - previews production build

`npm test` - runs unit tests (Vitest)

`npm run test:e2e` - runs end-to-end tests (Playwright)

## How application works?
When a button is pressed application loads a random Chuck Norris joke and displays its icon along with the joke text.

## What's next?
* Use RxJS for event handling
* Use Sagas
* Add link to original post
