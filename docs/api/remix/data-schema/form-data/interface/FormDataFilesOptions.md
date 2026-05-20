---
title: FormDataFilesOptions
---

# FormDataFilesOptions

## Summary

Options for parsing repeated file fields from `FormData`.

## Signature

```ts
interface FormDataFilesOptions {
  name?: string;
}

```

## Properties

### `name`

The form field name to read. Defaults to the object key passed to `object()`.