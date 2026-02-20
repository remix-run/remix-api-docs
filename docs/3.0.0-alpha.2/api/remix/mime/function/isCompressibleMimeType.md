---
title: isCompressibleMimeType
---

# isCompressibleMimeType

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/mime/src/lib/is-compressible-mime-type.ts#L18" target="_blank">View Source</a>

## Summary

Checks if a MIME type is known to be compressible.

Returns true for:
- Compressible MIME types from mime-db
- Any text/* type
- Types with +json, +text, or +xml suffix
- MIME types explicitly registered as compressible via `defineMimeType()`

Accepts either a bare MIME type or a full Content-Type header value with parameters.

## Signature

```ts
function isCompressibleMimeType(mimeType: string): boolean;

```

## Params

### mimeType

The MIME type to check (e.g. "application/json" or "text/html; charset=utf-8")

## Returns

true if the MIME type is known to be compressible