---
title: getMultipartBoundary
---

# getMultipartBoundary

## Summary

Extracts the boundary string from a `multipart/*` content type.

## Signature

```ts
function getMultipartBoundary(contentType: string): string | null;

```

## Parameters

### `contentType`

The `Content-Type` header value from the request

## Returns

The boundary string if found, or null if not present