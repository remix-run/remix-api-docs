---
title: field
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/form-data.ts#L142
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

## Params

### `schema`

### `options`

Parsing options for the field.

## Returns

A field schema entry for use with `object()`.