---
title: FormDataFieldsOptions
---

# FormDataFieldsOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-schema/src/lib/form-data.ts#L42" target="_blank">View Source</a>

## Summary

Options for parsing repeated text fields from `FormData` or `URLSearchParams`.

## Signature

```ts
interface FormDataFieldsOptions {
  name?: string;
}

```

## Properties

### name

The form field name to read. Defaults to the object key passed to `object()`.