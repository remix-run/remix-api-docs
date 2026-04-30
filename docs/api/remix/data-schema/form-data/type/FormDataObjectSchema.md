---
title: FormDataObjectSchema
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/form-data.ts#L71
---

# FormDataObjectSchema

## Summary

A Standard Schema-compatible schema that validates a `FormData` or `URLSearchParams` object.

## Signature

```ts
type FormDataObjectSchema<schema> = Schema<
  FormDataSource,
  ParsedFormData<schema>
>;

```