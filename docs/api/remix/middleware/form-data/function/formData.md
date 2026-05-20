---
title: formData
---

# formData

## Summary

Middleware that parses `FormData` from the request body and populates request context.

## Signature

```ts
function formData(
  options: FormDataOptions,
): Middleware<{
  key: {
    (form?: HTMLFormElement, submitter?: HTMLElement | null): FormData;
    prototype: FormData;
  };
  property: "formData";
  value: FormData;
}>;

```

## Parameters

### `options`

Options for parsing form data

## Returns

A middleware function that parses form data