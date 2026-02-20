---
title: ContentDisposition
---

# ContentDisposition

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/headers/src/lib/content-disposition.ts#L34" target="_blank">View Source</a>

## Summary

The value of a `Content-Disposition` HTTP header.

[MDN `Content-Disposition` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)

[RFC 6266](https://tools.ietf.org/html/rfc6266)

## Constructor

### init

## Properties

### filename

For file uploads, the name of the file that the user selected.

### filenameSplat

For file uploads, the name of the file that the user selected, encoded as a [RFC 8187](https://tools.ietf.org/html/rfc8187) `filename*` parameter.
This parameter allows non-ASCII characters in filenames, and specifies the character encoding.

### name

For `multipart/form-data` requests, the name of the `<input>` field associated with this content.

### type

The disposition type of the content, such as `attachment` or `inline`.

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