---
title: FileUploadHandler
---

# FileUploadHandler

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/form-data-parser/src/lib/form-data.ts#L53" target="_blank">View Source</a>

## Summary

## Signature

```ts
interface FileUploadHandler {
  (
    file: FileUpload,
  ): string | void | Blob | Promise<string | void | Blob | null> | null;
}

```

## Params

### file

The uploaded file

## Returns

A value to store in `FormData`, or `void`/`null` to skip