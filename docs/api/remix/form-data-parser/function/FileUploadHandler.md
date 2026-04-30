---
title: FileUploadHandler
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/form-data-parser/src/lib/form-data.ts#L60
---

# FileUploadHandler

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