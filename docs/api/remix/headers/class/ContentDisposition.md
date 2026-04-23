---
title: ContentDisposition
---

# ContentDisposition

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/headers/src/lib/content-disposition.ts#L34" target="_blank">View Source</a>

## Summary

The value of a `Content-Disposition` HTTP header.

[MDN `Content-Disposition` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)

[RFC 6266](https://tools.ietf.org/html/rfc6266)

## Signature

```ts
class ContentDisposition {
  constructor(init: string | ContentDispositionInit): ContentDisposition;

  // Properties
  filename?: string;
  filenameSplat?: string;
  name?: string;
  type?: string;

  // Accessors
  get preferredFilename(): string | undefined;

  // Methods
  toString(): string;
  from(value: string | ContentDispositionInit | null): ContentDisposition;
}

```

## Constructor Params

### init

## Properties

### filename

The `filename` parameter value.

### filenameSplat

The RFC 8187-encoded `filename*` parameter value.

### name

The associated multipart field name.

### type

The disposition type such as `attachment` or `inline`.

## Accessors

### preferredFilename

The preferred filename for the content, using the `filename*` parameter if present, falling back to the `filename` parameter.

From [RFC 6266](https://tools.ietf.org/html/rfc6266):

Many user agent implementations predating this specification do not understand the "filename*" parameter.
Therefore, when both "filename" and "filename*" are present in a single header field value, recipients SHOULD
pick "filename*" and ignore "filename". This way, senders can avoid special-casing specific user agents by
sending both the more expressive "filename*" parameter, and the "filename" parameter as fallback for legacy recipients.

## Methods

### toString(): string

Returns the string representation of the header value.

### from(value: string | ContentDispositionInit | null): ContentDisposition

Parse a Content-Disposition header value.

#### value

The header value (string, init object, or null)