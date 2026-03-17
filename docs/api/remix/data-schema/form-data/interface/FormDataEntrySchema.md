---
title: FormDataEntrySchema
---

# FormDataEntrySchema

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-schema/src/lib/form-data.ts#L22" target="_blank">View Source</a>

## Summary

A schema entry that reads one or more values from `FormData` or `URLSearchParams` and validates
them.

## Signature

```ts
interface FormDataEntrySchema<output> {
  kind: FormDataEntryKind;
  name?: string;
  schema: Schema<any, output>;
}

```

## Properties

### kind

The parsing mode used to read values from the input object.

### name

The form field name to read. Defaults to the object key passed to `object()`.

### schema

The schema used to validate the parsed value or values.