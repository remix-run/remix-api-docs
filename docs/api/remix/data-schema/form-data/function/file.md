---
title: file
---

# file

## Summary

Creates a schema entry for a single file field from `FormData`.

## Signature

```ts
function file<schema extends Schema<any, any>>(
  schema: schema,
  options: FormDataFileOptions,
): FormDataEntrySchema<InferOutput<schema>>;

```

## Parameters

### `schema`

### `options`

Parsing options for the field.

## Returns

A file schema entry for use with `object()`.