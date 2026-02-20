---
title: LazyFileOptions
---

# LazyFileOptions

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/lazy-file/src/lib/lazy-file.ts#L171" target="_blank">View Source</a>

## Summary

Options for creating a `LazyFile`.

## Signature

```ts
interface LazyFileOptions {
  lastModified?: number;
  range?: ByteRange;
  type?: string;
}

```

## Properties

### lastModified

The last modified timestamp of the file in milliseconds.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/File/File#lastmodified)

### range

The range of bytes to include from the content. If not specified, all content is included.

### type

The MIME type of the content.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob#type)