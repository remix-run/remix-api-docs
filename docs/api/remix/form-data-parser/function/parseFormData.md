---
title: parseFormData
---

# parseFormData

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/form-data-parser/src/lib/form-data.ts#L100" target="_blank">View Source</a>

## Summary

## Signature

```ts
function parseFormData(
  request: Request,
  uploadHandler: FileUploadHandler,
): Promise<FormData>;

function parseFormData(
  request: Request,
  options: ParseFormDataOptions,
  uploadHandler: FileUploadHandler,
): Promise<FormData>;

```

## Params

### request

The `Request` object to parse

### options

Options for the parser

### uploadHandler

A function that handles file uploads. It receives a `File` object and may return any value that is valid in a `FormData` object