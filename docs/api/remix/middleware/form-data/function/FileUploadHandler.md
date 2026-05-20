---
title: FileUploadHandler
---

# FileUploadHandler

## Summary

Transforms an uploaded file into the value stored in the parsed [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData).

## Signature

```ts
interface FileUploadHandler {
  (
    file: FileUpload,
  ): string | void | Blob | Promise<string | void | Blob | null> | null;
}

```