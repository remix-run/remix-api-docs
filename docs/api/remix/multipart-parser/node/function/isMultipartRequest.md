---
title: isMultipartRequest
---

# isMultipartRequest

## Summary

Returns true if the given request is a multipart request.

## Signature

```ts
function isMultipartRequest(req: IncomingMessage): boolean;

```

## Parameters

### `req`

The Node.js `http.IncomingMessage` object to check

## Returns

`true` if the request is a multipart request, `false` otherwise