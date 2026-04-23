---
title: file
---

# file

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-schema/src/lib/form-data.ts#L178" target="_blank">View Source</a>

## Summary

Creates a schema entry for a single file field from `FormData`.

## Signature

```ts
function file<schema extends Schema<any, any>>(
  schema: schema,
  options: FormDataFileOptions,
): FormDataEntrySchema<InferOutput<schema>>;

```

## Params

### schema

### options

Parsing options for the field.

## Returns

A file schema entry for use with `object()`.