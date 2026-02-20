---
title: ParseMultipartOptions
---

# ParseMultipartOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/multipart-parser/src/lib/multipart.ts#L53" target="_blank">View Source</a>

## Summary

Options for parsing a multipart message.

## Signature

```ts
interface ParseMultipartOptions {
  boundary: string;
  maxFileSize?: number;
  maxHeaderSize?: number;
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