---
title: formData
---

# formData

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/form-data-middleware/src/lib/form-data.ts#L33" target="_blank">View Source</a>

## Summary

Middleware that parses `FormData` from the request body and populates `context.formData`.

## Signature

```ts
function formData(options: FormDataOptions): Middleware;

```

## Params

### options

Options for parsing form data

## Returns

A middleware function that parses form data