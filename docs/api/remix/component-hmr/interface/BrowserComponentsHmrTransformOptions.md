---
title: "BrowserComponentsHmrTransformOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/component-hmr/src/lib/transform.ts#L26"
---

# BrowserComponentsHmrTransformOptions

## Summary

Options for rewriting browser component modules.

## Signature

```ts
interface BrowserComponentsHmrTransformOptions {
  importSource: string
  moduleUrl: string
  sourceMap?: boolean
}

```

## Properties

### `importSource`

Package prefix used to generate component refresh and browser HMR runtime imports, typically `'remix'` or `'@remix-run'`.

### `moduleUrl`

Stable public URL used to identify this module across browser updates.

This must match the URL by which the browser imports the module, excluding transient cache
busting parameters.

### `sourceMap`

Whether to generate a source map for rewritten code. (`false`)