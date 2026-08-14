---
title: BrowserComponentsHmrTransformOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/ui-hmr/src/lib/transform.ts#L34
---

# BrowserComponentsHmrTransformOptions

## Summary

Options for rewriting browser component modules.

## Signature

```ts
interface BrowserComponentsHmrTransformOptions {
  importSource: UiHmrImportSource
  moduleUrl: string
  sourceMap?: boolean
}

```

## Properties

### `importSource`

Package prefix used to generate UI refresh and browser HMR runtime imports.

### `moduleUrl`

Stable public URL used to identify this module across browser updates.

This must match the URL by which the browser imports the module, excluding transient cache
busting parameters.

### `sourceMap`

Whether to generate a source map for rewritten code. (`false`)