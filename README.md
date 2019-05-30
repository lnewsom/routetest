# RouteTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Use `--configurations=test` for a test build into the `dist/test` directory. User `--configurations=production` for a prod build into the `dist/prod`directory.

## Running unit tests

Run `npm test` to execute the unit tests via Jest.
Run `npm test -- -u` to run tests and update snapshots.

## Why Jest?
Jest is designed to test javascript while Testbed is designed to specifically test javascript for Angular. The set up for TestBed is more involved, and requires generating mini-Modules within the test. Since TestBed will actually try to compile the components it is necessary to either provide all dependencies for each component tied to the component undertest or use a schema like NO_ERRORS_SCHEMA to prevent dependency errors. Jest by nature is only testing the component undertest without attempting to compile the entire module, so providing a shallow mock of the dependencies is enough to allow the tests to run.

## Set Up Jest
install jest
$ npm i -D jest jest-preset-angular

make sure you have the following dev dependencies in package.json. If not, add them and run `npm i`:
```
    "@types/jest": "^24.0.11",
    "jest": "^24.8.0",
    "jest-mock": "^24.8.0",
    "jest-preset-angular": "^7.1.1"
```
    
Create a file called jest.config.ts in the project root with the following code:
```
      module.exports = {
        coveragePathIgnorePatterns: [
            "/node_modules/",
            "/src/jestGlobalMocks.ts/",
            "/src/setup-jest.ts"
        ],
          coverageThreshold: {
            global: {
              branches: 100,
              functions: 100,
              lines: 100,
              statements: 100
             }
        },
        preset: "jest-preset-angular",
        roots:['src'],
        setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
        testPathIgnorePatterns: ["<rootDir>/src/environments/"]
    }
```

Create a file inside the `src` directory called setup-jest.ts with the following code:
```
import 'jest-preset-angular';
import './setup-jest';
```

Alter the `tsconfig.spec.json` file types property to include the following:
```
    "types": [
      "node",
      "jest"
    ]
```

Inside the `src` directory add a file called jestGlobalMocks.ts with the following code:
```
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(document, 'doctype', {
 value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
 value: () => {
   return {
     display: 'none',
     appearance: ['-webkit-appearance']
   };
 }
});

/**
* ISSUE: https://github.com/angular/material2/issues/7101
* Workaround for JSDOM missing transform property
*/
Object.defineProperty(document.body.style, 'transform', {
 value: () => {
   return {
     enumerable: true,
     configurable: true,
   };
 },
});
```

## Jest Testing Links
https://jestjs.io/

https://brianflove.com/2018/05/26/angular-jest-testing/

## Chance.js
Chance is a great library for providing randomized data. Follow the install instructions at this link:
https://chancejs.com/usage/node.html


