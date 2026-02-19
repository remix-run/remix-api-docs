---
title: getMultipartBoundary
---

# getMultipartBoundary

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/multipart-parser/src/lib/multipart-request.ts#L10" target="_blank">View Source</a>

## Summary

Extracts the boundary string from a `multipart/*` content type.

## Signature

```ts
function getMultipartBoundary(contentType: string): string | null;

```

## Params

### contentType

The `Content-Type` header value from the request

## Returns

The boundary string if found, or null if not present