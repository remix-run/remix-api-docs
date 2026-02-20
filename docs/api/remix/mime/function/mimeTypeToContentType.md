---
title: mimeTypeToContentType
---

# mimeTypeToContentType

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/mime/src/lib/mime-type-to-content-type.ts#L30" target="_blank">View Source</a>

## Summary

Converts a MIME type to a Content-Type header value, adding charset when appropriate.

By default, adds `; charset=utf-8` to text-based MIME types:
- All `text/*` types (except `text/xml`)
- All `+json` suffixed types (RFC 8259 defines JSON as UTF-8)
- `application/json`, `application/javascript`

Custom charset registered via `defineMimeType()` takes precedence over built-in rules.

Note: `text/xml` is excluded because XML has built-in encoding detection.
Per the XML spec, documents without an encoding declaration must be UTF-8 or
UTF-16, detectable from byte patterns. Adding an external charset parameter
is redundant and can conflict with the document's internal declaration.

## Signature

```ts
function mimeTypeToContentType(mimeType: string): string;

```

## Example

```ts
mimeTypeToContentType('text/html')           // 'text/html; charset=utf-8'
mimeTypeToContentType('application/json')    // 'application/json; charset=utf-8'
mimeTypeToContentType('application/ld+json') // 'application/ld+json; charset=utf-8'
mimeTypeToContentType('image/png')           // 'image/png'
mimeTypeToContentType('text/xml')            // 'text/xml'
```

## Params

### mimeType

The MIME type (e.g. "text/css", "image/png")

## Returns

The Content-Type value with charset if appropriate