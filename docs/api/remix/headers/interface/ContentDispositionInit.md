---
title: ContentDispositionInit
---

# ContentDispositionInit

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/content-disposition.ts#L7" target="_blank">View Source</a>

## Summary

Initializer for a `Content-Disposition` header value.

## Signature

```ts
interface ContentDispositionInit {
  filename?: string;
  filenameSplat?: string;
  name?: string;
  type?: string;
}

```

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