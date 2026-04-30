---
title: getMultipartBoundary
source: https://github.com/remix-run/remix/blob/main/packages/multipart-parser/src/lib/multipart-request.ts#L10
---

# getMultipartBoundary

## Summary

Extracts the boundary string from a `multipart/*` content type.

## Signature

```ts
function getMultipartBoundary(contentType: string): string | null;

```

## Params

### `contentType`

The `Content-Type` header value from the request

## Returns

The boundary string if found, or null if not present