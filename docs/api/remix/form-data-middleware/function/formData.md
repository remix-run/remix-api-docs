---
title: formData
source: https://github.com/remix-run/remix/blob/main/packages/form-data-middleware/src/lib/form-data.ts#L50
---

# formData

## Summary

Middleware that parses `FormData` from the request body and populates request context.

## Signature

```ts
function formData(
  options: FormDataOptions,
): Middleware<any, any, SetFormDataContextTransform>;

```

## Params

### `options`

Options for parsing form data

## Returns

A middleware function that parses form data