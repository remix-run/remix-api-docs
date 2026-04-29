---
title: FormDataObjectSchema
---

# FormDataObjectSchema

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-schema/src/lib/form-data.ts#L71" target="_blank">View Source</a>

## Summary

A Standard Schema-compatible schema that validates a `FormData` or `URLSearchParams` object.

## Signature

```ts
type FormDataObjectSchema<schema> = Schema<
  FormDataSource,
  ParsedFormData<schema>
>;

```