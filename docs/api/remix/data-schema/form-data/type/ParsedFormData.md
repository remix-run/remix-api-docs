---
title: ParsedFormData
---

# ParsedFormData

## Summary

The typed result produced by `object()` for a given form-data shape.

## Signature

```ts
type ParsedFormData<schema> = {
  [key in keyof schema]: schema[key] extends FormDataEntrySchema<infer output>
    ? output
    : never;
};

```