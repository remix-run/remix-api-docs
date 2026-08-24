---
title: ParsedFormData
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-schema/src/lib/form-data.ts#L79
---

# ParsedFormData

## Summary

The typed result produced by `object()` for a given form-data shape.

## Signature

```ts
type ParsedFormData<schema> = {
  [key in keyof schema]: schema[key] extends FormDataEntrySchema<infer output> ? output : never
}

```