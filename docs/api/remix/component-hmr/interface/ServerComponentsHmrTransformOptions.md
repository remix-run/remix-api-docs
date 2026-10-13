---
title: "ServerComponentsHmrTransformOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/component-hmr/src/lib/transform.ts#L43"
---

# ServerComponentsHmrTransformOptions

## Summary

Options for rewriting server component modules.

## Signature

```ts
interface ServerComponentsHmrTransformOptions {
  importSource: string
  moduleUrl: string
  sourceMap?: boolean
}

```

## Properties

### `importSource`

Package prefix used to generate the server HMR runtime import, typically `'remix'` or `'@remix-run'`.

### `moduleUrl`

Stable module URL used to identify this module across server updates, typically its `file:` URL
without cache-busting search parameters.

### `sourceMap`

Whether to generate a source map for rewritten code. (`false`)