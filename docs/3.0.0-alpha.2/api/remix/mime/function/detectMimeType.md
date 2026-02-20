---
title: detectMimeType
---

# detectMimeType

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/mime/src/lib/detect-mime-type.ts#L18" target="_blank">View Source</a>

## Summary

Detects the MIME type for a given file extension or filename.

Custom MIME types registered via `defineMimeType()` take precedence over built-in types.

## Signature

```ts
function detectMimeType(extension: string): string | undefined;

```

## Example

```ts
detectMimeType('txt')           // 'text/plain'
detectMimeType('.txt')          // 'text/plain'
detectMimeType('file.txt')      // 'text/plain'
detectMimeType('unknown')       // undefined
```

## Params

### extension

The file extension (e.g. "txt", ".txt") or filename (e.g. "file.txt")

## Returns

The MIME type string, or undefined if not found