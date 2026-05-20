---
title: FormDataObjectSchema
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