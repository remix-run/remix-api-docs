---
title: detectMimeType
source: https://github.com/remix-run/remix/blob/main/packages/mime/src/lib/detect-mime-type.ts#L19
---

# detectMimeType

## Summary

Detects the MIME type for a given file extension or filename.

Custom MIME types registered via import('./define-mime-type.ts').defineMimeType
take precedence over built-in types.

## Signature

```ts
function detectMimeType(extension: string): string | undefined;

```

## Example

```ts
detectMimeType("txt"); // 'text/plain'
detectMimeType(".txt"); // 'text/plain'
detectMimeType("file.txt"); // 'text/plain'
detectMimeType("unknown"); // undefined

```

## Parameters

### `extension`

The file extension (e.g. "txt", ".txt") or filename (e.g. "file.txt")

## Returns

The MIME type string, or undefined if not found