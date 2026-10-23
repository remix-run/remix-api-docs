---
title: "Render"
source: "https://github.com/remix-run/remix/blob/main/packages/spa/src/lib/spa.ts#L20"
---

# Render

## Summary

Creates a renderable route response.

## Signature

```ts
interface Render {
  (node: RemixNode, init: ResponseInit): Response
}

```

## Parameters

### `node`

Node to render.

### `init`

Optional response status and headers.

## Returns

A response understood by the SPA runtime.