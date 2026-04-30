---
title: isMultipartRequest
source: https://github.com/remix-run/remix/blob/main/packages/multipart-parser/src/lib/multipart.node.ts#L55
---

# isMultipartRequest

## Summary

Returns true if the given request is a multipart request.

## Signature

```ts
function isMultipartRequest(req: IncomingMessage): boolean;

```

## Params

### `req`

The Node.js `http.IncomingMessage` object to check

## Returns

`true` if the request is a multipart request, `false` otherwise