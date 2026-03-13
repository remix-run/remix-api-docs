---
title: FileUploadHandler
---

# FileUploadHandler

<a href="https://github.com/remix-run/remix/blob/main/packages/form-data-parser/src/lib/form-data.ts#L56" target="_blank">View Source</a>

## Summary

Transforms an uploaded file into the value stored in the parsed FormData.

## Signature

```ts
interface FileUploadHandler {
  (
    file: FileUpload,
  ): string | void | Blob | Promise<string | void | Blob | null> | null;
}

```