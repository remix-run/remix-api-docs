---
title: RenderOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.1/packages/render-middleware/src/lib/render-ui.ts#L47
---

# RenderOptions

## Summary

Options for the standard Remix UI renderer.

## Signature

```ts
interface RenderOptions {
  assets?: Pick<AssetServer<{}>, 'getHref' | 'getPreloads'>
  onError?: (error: unknown) => void
}

```

## Properties

### `assets`

Asset server used to turn source-based client entry IDs into browser module and preload URLs.

### `onError`

Error hook invoked when server rendering fails.