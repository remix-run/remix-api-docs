---
title: fields
---

# fields

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-schema/src/lib/form-data.ts#L160" target="_blank">View Source</a>

## Summary

Creates a schema entry for repeated text fields from `FormData` or `URLSearchParams`.

## Signature

```ts
function fields<schema extends Schema<any, any>>(
  schema: schema,
  options: FormDataFieldsOptions,
): FormDataEntrySchema<InferOutput<schema>>;

```

## Params

### schema

### options

Parsing options for the field.

## Returns

A field schema entry for use with `object()`.