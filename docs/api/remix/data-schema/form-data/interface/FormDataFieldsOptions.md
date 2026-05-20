---
title: FormDataFieldsOptions
---

# FormDataFieldsOptions

## Summary

Options for parsing repeated text fields from `FormData` or `URLSearchParams`.

## Signature

```ts
interface FormDataFieldsOptions {
  name?: string;
}

```

## Properties

### `name`

The form field name to read. Defaults to the object key passed to `object()`.