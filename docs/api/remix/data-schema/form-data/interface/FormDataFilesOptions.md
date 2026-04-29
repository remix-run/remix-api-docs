---
title: FormDataFilesOptions
---

# FormDataFilesOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-schema/src/lib/form-data.ts#L58" target="_blank">View Source</a>

## Summary

Options for parsing repeated file fields from `FormData`.

## Signature

```ts
interface FormDataFilesOptions {
  name?: string;
}

```

## Properties

### name

The form field name to read. Defaults to the object key passed to `object()`.