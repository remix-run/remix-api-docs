---
title: "ContentDispositionInit"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/headers/src/lib/content-disposition.ts#L7"
---

# ContentDispositionInit

## Summary

Initializer for a `Content-Disposition` header value.

## Signature

```ts
interface ContentDispositionInit {
  filename?: string
  filenameSplat?: string
  name?: string
  type?: string
}

```

## Properties

### `filename`

The suggested filename for the content. Values received from clients are untrusted metadata
and must not be used directly as filesystem paths.

### `filenameSplat`

The suggested filename encoded as an [RFC 8187](https://tools.ietf.org/html/rfc8187) `filename*` parameter.
Values received from clients are untrusted metadata, even after decoding, and must not be
used directly as filesystem paths.

### `name`

For `multipart/form-data` requests, the name of the `<input>` field associated with this content.

### `type`

The disposition type of the content, such as `attachment` or `inline`.