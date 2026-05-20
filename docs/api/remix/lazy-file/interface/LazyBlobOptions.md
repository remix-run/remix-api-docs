---
title: LazyBlobOptions
---

# LazyBlobOptions

## Summary

Options for creating a [`LazyBlob`](/api/remix/lazy-file/class/LazyBlob/).

## Signature

```ts
interface LazyBlobOptions {
  range?: ByteRange;
  type?: string;
}

```

## Properties

### `range`

The range of bytes to include from the content. If not specified, all content is included.

### `type`

The MIME type of the content.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob#type)