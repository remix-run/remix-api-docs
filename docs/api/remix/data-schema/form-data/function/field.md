---
title: field
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/form-data.ts#L142
---

# field

## Summary

Creates a schema entry for a single text field from `FormData` or `URLSearchParams`.

## Signature

```ts
function field<schema extends Schema<any, any>>(
  schema: schema,
  options: FormDataFieldOptions,
): FormDataEntrySchema<InferOutput<schema>>;

```

## Parameters

### `schema`

### `options`

Parsing options for the field.

## Returns

A field schema entry for use with `object()`.