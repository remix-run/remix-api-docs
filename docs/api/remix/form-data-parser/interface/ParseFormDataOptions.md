---
title: ParseFormDataOptions
---

# ParseFormDataOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/form-data-parser/src/lib/form-data.ts#L101" target="_blank">View Source</a>

## Summary

Options for parsing form data.

## Signature

```ts
interface ParseFormDataOptions {
  maxFiles?: number;
  maxFileSize?: number;
  maxHeaderSize?: number;
  maxParts?: number;
  maxTotalSize?: number;
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