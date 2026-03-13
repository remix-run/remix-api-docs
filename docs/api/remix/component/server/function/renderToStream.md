---
title: renderToStream
---

# renderToStream

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/stream.ts#L163" target="_blank">View Source</a>

## Summary

Renders a node tree to a streaming HTML response body.

## Signature

```ts
function renderToStream(
  node: RemixNode,
  options: RenderToStreamOptions,
): ReadableStream<Uint8Array<ArrayBufferLike>>;

```

## Params

### node

Node tree to render.

### options

Stream rendering options.

## Returns

A readable byte stream of HTML.