---
title: detectContentType
---

# detectContentType

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/mime/src/lib/detect-content-type.ts#L20" target="_blank">View Source</a>

## Summary

Detects the Content-Type header value for a given file extension or filename.

Returns a full Content-Type value including charset when appropriate, based on
the charset defined in mime-db for the detected MIME type.

## Signature

```ts
function detectContentType(extension: string): string | undefined;

```

## Example

```ts
detectContentType('css')           // 'text/css;charset=utf-8'
detectContentType('.css')          // 'text/css;charset=utf-8'
detectContentType('style.css')     // 'text/css;charset=utf-8'
detectContentType('image.png')     // 'image/png'
detectContentType('unknown')       // undefined
```

## Params

### extension

The file extension (e.g. "css", ".css") or filename (e.g. "style.css")

## Returns

The Content-Type value, or undefined if not found