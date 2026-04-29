---
title: object
---

# object

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-schema/src/lib/form-data.ts#L93" target="_blank">View Source</a>

## Summary

Creates a Standard Schema-compatible schema that reads typed values from a `FormData` or
`URLSearchParams` object.

Use the returned schema with `parse()` or `parseSafe()` from `@remix-run/data-schema`.

## Signature

```ts
function object<schema extends FormDataSchema>(
  schema: schema,
): FormDataObjectSchema<schema>;

```

## Params

### schema

## Returns

A schema that validates a `FormData` or `URLSearchParams` object and produces typed
output.