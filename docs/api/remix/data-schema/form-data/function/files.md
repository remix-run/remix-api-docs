---
title: files
---

# files

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-schema/src/lib/form-data.ts#L196" target="_blank">View Source</a>

## Summary

Creates a schema entry for repeated file fields from `FormData`.

## Signature

```ts
function files<schema extends Schema<any, any>>(
  schema: schema,
  options: FormDataFilesOptions,
): FormDataEntrySchema<InferOutput<schema>>;

```

## Params

### schema

### options

Parsing options for the field.

## Returns

A file schema entry for use with `object()`.