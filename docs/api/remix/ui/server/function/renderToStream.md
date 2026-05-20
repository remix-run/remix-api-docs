---
title: renderToStream
---

# renderToStream

## Summary

Renders a node tree to a streaming HTML response body.

## Signature

```ts
function renderToStream(
  node: RemixNode,
  options: RenderToStreamOptions,
): ReadableStream<Uint8Array<ArrayBufferLike>>;

```

## Parameters

### `node`

Node tree to render.

### `options`

Stream rendering options.

## Returns

A readable byte stream of HTML.