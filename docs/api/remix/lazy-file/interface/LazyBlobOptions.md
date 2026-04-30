---
title: LazyBlobOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/lazy-file/src/lib/lazy-file.ts#L26
---

# LazyBlobOptions

## Summary

Options for creating a LazyBlob.

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