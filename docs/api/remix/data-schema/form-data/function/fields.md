---
title: fields
---

# fields

## Summary

Creates a schema entry for repeated text fields from `FormData` or `URLSearchParams`.

## Signature

```ts
function fields<schema extends Schema<any, any>>(
  schema: schema,
  options: FormDataFieldsOptions,
): FormDataEntrySchema<InferOutput<schema>>;

```

## Parameters

### `schema`

### `options`

Parsing options for the field.

## Returns

A field schema entry for use with `object()`.