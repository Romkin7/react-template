# react-template

React 18 starter template, with custom Webpack 5 and babel setup. Including
eslint, stylelint, TypeScript, prettier, Jest and Cypress.

## Config App

Change App title and Description and other fields in `config/app.config.js`
file. These values will be injected into `public/index.html`.

## Install

Clone this repository on your system and start developing React app.

-   `git clone git@github.com:Romkin7/react-template.git`
-   `cd react-template`
-   `yarn`

## Run

`yarn start`

http://localhost:3000

## Build

To build a production bundle of your React app, you need to run:

`yarn build`

build script will first execute prettier lint, then js and scss lint and run
jest tests and finally builds the app.

Includes:

`yarn format:check` & `yarn lint` & `yarn test`
