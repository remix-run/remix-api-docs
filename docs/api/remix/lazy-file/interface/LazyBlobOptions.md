---
title: LazyBlobOptions
---

# LazyBlobOptions

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/lazy-file/src/lib/lazy-file.ts#L26" target="_blank">View Source</a>

## Summary

Options for creating a `LazyBlob`.

## Signature

```ts
interface LazyBlobOptions {
  range?: ByteRange;
  type?: string;
}

```

## Properties

### range

The range of bytes to include from the content. If not specified, all content is included.

### type

The MIME type of the content.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob#type)