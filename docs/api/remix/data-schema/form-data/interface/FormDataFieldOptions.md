---
title: FormDataFieldOptions
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

### `name`

The form field name to read. Defaults to the object key passed to `object()`.