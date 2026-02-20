---
title: FormDataOptions
---

# FormDataOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/form-data-middleware/src/lib/form-data.ts#L12" target="_blank">View Source</a>

## Summary

Options for the `formData` middleware.

## Signature

```ts
interface FormDataOptions {
  maxFiles?: number;
  maxFileSize?: number;
  maxHeaderSize?: number;
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

### suppressErrors

Set `true` to suppress parse errors.

### uploadHandler

A function that handles file uploads. It receives a `FileUpload` object and may return any
value that is a valid `FormData` value. Default is `undefined`, which means file uploads are
stored in memory.