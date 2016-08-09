## Webpack 2.1.0-beta.20 Import Barrel Bug

A simple repo showcasing the current issue with using [Import Barrels](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-10).

Setup:
```shell
$ npm install
```

Build:
```shell
$ ./node_modules/.bin/webpack
```

Run:
```shell
$ open ./bin/index.html
```

Make sure and open your console to see the output.  There should be no `undefined`'s in the `console.log()`'s.
