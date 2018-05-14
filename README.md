# Grenn.io
> Stats website for the game Gigantic

**Important!!** Gigantic has shutdown it's API and will completly shutdown in june/july.

## How to run it

Dependencies:

* Node 8+ (Probably also works with older versions)
* A browser

First you need to download it from this git repository so that you can run it on your PC, you can either do that with a git client or download it straight away from github.com.

After this, you will need to install the npm dependencies, you can do that by running `npm install` inside the project root folder. You can now start the @angular/cli development server by executing `npx ng serve` and view it by navigating to `http://localhost:4200/` in your browser.

### How to run tests

You can execute the tests via `npx ng test`.

## Whats inside

This application is written with

* Angular (\^4.0.0)
* NGRX and my self built ngrx abstraction
* Firebase
* immutable.js
* Ramda
* lodash
* numeral
* and more...