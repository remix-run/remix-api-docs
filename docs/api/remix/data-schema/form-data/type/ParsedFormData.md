---
title: ParsedFormData
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/form-data.ts#L79
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