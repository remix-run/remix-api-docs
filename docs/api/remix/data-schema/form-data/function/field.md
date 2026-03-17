---
title: field
---

# field

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-schema/src/lib/form-data.ts#L142" target="_blank">View Source</a>

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

### schema

### options

Parsing options for the field.

## Returns

A field schema entry for use with `object()`.