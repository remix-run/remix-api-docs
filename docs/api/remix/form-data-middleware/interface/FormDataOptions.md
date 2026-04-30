---
title: FormDataOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/form-data-middleware/src/lib/form-data.ts#L28
---

# FormDataOptions

## Summary

Options for the formData middleware.

## Signature

```ts
interface FormDataOptions {
  maxFiles?: number;
  maxFileSize?: number;
  maxHeaderSize?: number;
  maxParts?: number;
  maxTotalSize?: number;
  suppressErrors?: boolean;
  uploadHandler?: FileUploadHandler;
}

```

## Properties

### maxFiles

The maximum number of files that can be uploaded in a single request. If this limit is
exceeded, a `MaxFilesExceededError` will be thrown.

### maxFileSize

The maximum allowed size of a file in bytes. If an individual part's content
exceeds this size, a `MaxFileSizeExceededError` will be thrown.

### maxHeaderSize

The maximum allowed size of a header in bytes. If an individual part's header
exceeds this size, a `MaxHeaderSizeExceededError` will be thrown.

### maxParts

The maximum allowed number of parts in the multipart message. If this limit
is exceeded, a `MaxPartsExceededError` will be thrown.

### maxTotalSize

The maximum allowed aggregate size of all part content in bytes. If this
limit is exceeded, a `MaxTotalSizeExceededError` will be thrown.

### suppressErrors

Set `true` to suppress malformed form-data parse errors. Multipart limit violations always
surface as errors even when suppression is enabled.

### uploadHandler

A function that handles file uploads. It receives a `FileUpload` object and may return any
value that is a valid `FormData` value. Default is `undefined`, which means file uploads are
stored in memory.