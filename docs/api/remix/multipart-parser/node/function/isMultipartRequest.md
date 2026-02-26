---
title: isMultipartRequest
---

# isMultipartRequest

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/multipart-parser/src/lib/multipart.node.ts#L52" target="_blank">View Source</a>

## Summary

Returns true if the given request is a multipart request.

## Signature

```ts
function isMultipartRequest(req: IncomingMessage): boolean;

```

## Params

### req

The Node.js `http.IncomingMessage` object to check

## Returns

`true` if the request is a multipart request, `false` otherwise