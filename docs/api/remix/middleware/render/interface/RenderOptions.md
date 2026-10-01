---
title: "RenderOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/render-middleware/src/lib/render-ui.ts#L54"
---

# RenderOptions

## Summary

Options for the standard Remix component renderer.

## Signature

```ts
interface RenderOptions {
  assets?: Pick<AssetServer<{}>, 'getScriptEntry'>
  onError?: (error: unknown) => void
}

```

## Properties

### `assets`

Asset server used to turn source-based client entry IDs into browser module metadata.

### `onError`

Error hook invoked when server rendering fails.