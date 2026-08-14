---
title: ServerComponentsHmrTransformOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/ui-hmr/src/lib/transform.ts#L51
---

# ServerComponentsHmrTransformOptions

## Summary

Options for rewriting server component modules.

## Signature

```ts
interface ServerComponentsHmrTransformOptions {
  importSource: UiHmrImportSource
  moduleUrl: string
  sourceMap?: boolean
}

```

## Properties

### `importSource`

Package prefix used to generate the server HMR runtime import.

### `moduleUrl`

Stable module URL used to identify this module across server updates, typically its `file:` URL
without cache-busting search parameters.

### `sourceMap`

Whether to generate a source map for rewritten code. (`false`)