---
title: FormDataFieldOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/form-data.ts#L34
---

# FormDataFieldOptions

## Summary

Options for parsing a single text field from `FormData` or `URLSearchParams`.

## Signature

```ts
interface FormDataFieldOptions {
  name?: string;
}

```

## Properties

### name

The form field name to read. Defaults to the object key passed to `object()`.