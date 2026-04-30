---
title: ParseMultipartOptions
source: https://github.com/remix-run/remix/blob/main/packages/multipart-parser/src/lib/multipart.ts#L79
---

# ParseMultipartOptions

## Summary

Options for parsing a multipart message.

## Signature

```ts
interface ParseMultipartOptions {
  boundary: string;
  maxFileSize?: number;
  maxHeaderSize?: number;
  maxParts?: number;
  maxTotalSize?: number;
}

```

## Properties

### boundary

The boundary string used to separate parts in the multipart message,
e.g. the `boundary` parameter in the `Content-Type` header.

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