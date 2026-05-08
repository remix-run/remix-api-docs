---
title: files
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/form-data.ts#L196
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