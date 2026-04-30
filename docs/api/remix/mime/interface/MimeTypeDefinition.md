---
title: MimeTypeDefinition
source: https://github.com/remix-run/remix/blob/main/packages/mime/src/lib/define-mime-type.ts#L4
---

# MimeTypeDefinition

## Summary

Definition used to register a custom MIME type.

## Signature

```ts
interface MimeTypeDefinition {
  charset?: string;
  compressible?: boolean;
  extensions: string | string[];
  mimeType: string;
}

```

## Properties

### charset

Charset to include in Content-Type header.
- `'utf-8'` or other string → '; charset={value}'
- `undefined` → falls back to default heuristics (`'utf-8'` for `text/*`, `application/json`, `+json`)

### compressible

Whether this MIME type is compressible.
If omitted, falls back to default heuristics (text/*, +json, +text, +xml).

### extensions

The file extension(s) to register (e.g., ['x-myformat'])

### mimeType

The MIME type for these extensions (e.g., 'application/x-myformat')