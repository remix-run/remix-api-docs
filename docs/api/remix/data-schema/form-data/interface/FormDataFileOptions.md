---
title: FormDataFileOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/form-data.ts#L50
---

# FormDataFileOptions

## Summary

Options for parsing a single file field from `FormData`.

## Signature

```ts
interface FormDataFileOptions {
  name?: string;
}

```

## Properties

### `name`

The form field name to read. Defaults to the object key passed to `object()`.