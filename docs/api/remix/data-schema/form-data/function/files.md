---
title: files
---

# files

## Summary

Creates a schema entry for repeated file fields from `FormData`.

## Signature

```ts
function files<schema extends Schema<any, any>>(
  schema: schema,
  options: FormDataFilesOptions,
): FormDataEntrySchema<InferOutput<schema>>;

```

## Parameters

### `schema`

### `options`

Parsing options for the field.

## Returns

A file schema entry for use with `object()`.