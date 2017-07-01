# Testing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Steps

- npm install
- Follow instruction from https://angular.io/guide/aot-compiler
- Add `zone.js` and `reflect.js` inside index.html prior to build.js.
- "node_modules/.bin/ngc" -p tsconfig-aot.json
- "node_modules/.bin/rollup"  -c rollup-config.js
- Run http-server OR lite server to execute the application
