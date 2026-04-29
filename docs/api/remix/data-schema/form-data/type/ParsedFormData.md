---
title: ParsedFormData
---

# ParsedFormData

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-schema/src/lib/form-data.ts#L79" target="_blank">View Source</a>

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