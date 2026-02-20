---
title: compression
---

# compression

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/compression-middleware/src/lib/compression.ts#L60" target="_blank">View Source</a>

## Summary

Creates a middleware handler that automatically compresses responses based on the
client's Accept-Encoding header, along with an additional Content-Type filter
by default to only apply compression to appropriate media types.

## Signature

```ts
function compression(options: CompressionOptions): Middleware;

```

## Example

```ts
let router = createRouter({
  middleware: [compression()],
})
```

## Params

### options

Optional compression settings

## Returns

A middleware handler that automatically compresses responses based on the client's Accept-Encoding header