---
title: formData
---

# formData

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/form-data-middleware/src/lib/form-data.ts#L50" target="_blank">View Source</a>

## Summary

Middleware that parses `FormData` from the request body and populates request context.

## Signature

```ts
function formData(
  options: FormDataOptions,
): Middleware<any, any, SetFormDataContextTransform>;

```

## Params

### options

Options for parsing form data

## Returns

A middleware function that parses form data