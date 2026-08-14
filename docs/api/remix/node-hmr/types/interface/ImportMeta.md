---
title: ImportMeta
---

# ImportMeta

## Summary

The type of `import.meta`.

If you need to declare that a given property exists on `import.meta`,
this type may be augmented via interface merging.

## Signature

```ts
interface ImportMeta {
  dirname: string
  filename: string
  hot?: ImportMetaHot
  main: boolean
  url: string
  resolve(specifier: string): string
  resolve(specifier: string, parent: string | URL): string
}

```

## Properties

### `dirname`

The directory name of the current module.

This is the same as the `path.dirname()` of the `import.meta.filename`.

> **Caveat**: only present on `file:` modules.

### `filename`

The full absolute path and filename of the current module, with
symlinks resolved.

This is the same as the `url.fileURLToPath()` of the `import.meta.url`.

> **Caveat** only local modules support this property. Modules not using the
> `file:` protocol will not provide it.

### `hot`

### `main`

`true` when the current module is the entry point of the current process; `false` otherwise.

Equivalent to `require.main === module` in CommonJS.

Analogous to Python's `__name__ == "__main__"`.

```js
export function foo() {
  return 'Hello, world';
}

function main() {
  const message = foo();
  console.log(message);
}

if (import.meta.main) main();
// `foo` can be imported from another module without possible side-effects from `main`
```

### `url`

The absolute `file:` URL of the module.

This is defined exactly the same as it is in browsers providing the URL of the
current module file.

This enables useful patterns such as relative file loading:

```js
import { readFileSync } from 'node:fs';
const buffer = readFileSync(new URL('./data.proto', import.meta.url));
```

## Methods

### `resolve(specifier: string): string`



### `resolve(specifier: string, parent: string | URL): string`

`import.meta.resolve` is a module-relative resolution function scoped to
each module, returning the URL string.

```js
const dependencyAsset = import.meta.resolve('component-lib/asset.css');
// file:///app/node_modules/component-lib/asset.css
import.meta.resolve('./dep.js');
// file:///app/dep.js
```

All features of the Node.js module resolution are supported. Dependency
resolutions are subject to the permitted exports resolutions within the package.

**Caveats**:

* This can result in synchronous file-system operations, which
  can impact performance similarly to `require.resolve`.
* This feature is not available within custom loaders (it would
  create a deadlock).

#### Parameters

##### `specifier`

The module specifier to resolve relative to the
current module.

##### `parent`

An optional absolute parent module URL to resolve from.
**Default:** `import.meta.url`