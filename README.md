# Ripple | Export
[![Coverage Status](https://coveralls.io/repos/rijs/export/badge.svg?branch=master&service=github)](https://coveralls.io/github/rijs/export?branch=master)
[![Build Status](https://travis-ci.org/rijs/export.svg)](https://travis-ci.org/rijs/export)

Combines all resources under the resources directory into a single `index.js` file. This is so you can export and import a bundle of resources from separate repos by simplying `require`ing them. Note that this is not the same bundling, since function resources are linked with requires, such that you could subsequently browserify the output (`index.js`) to produce a client bundle.

```js
import buttons from 'ux-button'
import inputs from 'ux-input'
import rijs from 'rijs'

ripple = rijs({ .. })
  .resource(buttons)
  .resource(inputs)
```

Running `rijs.export` (defaults to `rijs.export dist/resources`), likely as part of a [`npm run build`](https://github.com/vanillacomponents/ux-input/blob/master/package.json#L12) would place the `index.js` file under `dist/resources/index.js`. You then just need to [point the `main`](https://github.com/vanillacomponents/ux-input/blob/master/package.json#L4) field in your `package.json` to point this file so it can be required.