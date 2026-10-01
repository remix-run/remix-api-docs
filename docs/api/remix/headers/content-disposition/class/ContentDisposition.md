---
title: "ContentDisposition"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/headers/src/lib/content-disposition.ts#L36"
---

# ContentDisposition

## Summary

The value of a `Content-Disposition` HTTP header.

[MDN `Content-Disposition` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)

[RFC 6266](https://tools.ietf.org/html/rfc6266)

## Signature

```ts
class ContentDisposition {
  constructor(init: string | ContentDispositionInit): ContentDisposition

  // Properties
  filename?: string
  filenameSplat?: string
  name?: string
  type?: string

  // Accessors
  get preferredFilename(): string | undefined

  // Methods
  toString(): string
  from(value: string | ContentDispositionInit | null): ContentDisposition
}

```

## Properties

### `filename`

The `filename` parameter value. Values received from clients are untrusted metadata;
no filesystem sanitization is applied. Do not use this value directly as a filesystem path.

### `filenameSplat`

The RFC 8187-encoded `filename*` parameter value. Values received from clients are untrusted
metadata, even after decoding. Do not use this value directly as a filesystem path.

### `name`

The associated multipart field name.

### `type`

The disposition type such as `attachment` or `inline`.

## Accessors

### `preferredFilename`

The preferred filename for the content, using the decoded `filename*` parameter when available,
falling back to the `filename` parameter, as described in [RFC 6266](https://tools.ietf.org/html/rfc6266).

This selects and decodes metadata without sanitizing it for filesystem use. Values received
from clients are untrusted input and must not be used directly as filesystem paths. Generate
a storage name in your application instead.

## Methods

### `toString(): string`

Returns the string representation of the header value.



### `from(value: string | ContentDispositionInit | null): ContentDisposition`

Parse a Content-Disposition header value.

#### Parameters

##### `value`

The header value (string, init object, or null)