---
title: ContentType
---

# ContentType

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/headers/src/lib/content-type.ts#L35" target="_blank">View Source</a>

## Summary

The value of a `Content-Type` HTTP header.

[MDN `Content-Type` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7231#section-3.1.1.5)

## Constructor

### init

## Properties

### boundary

For multipart entities, the boundary that separates the different parts of the message.

### charset

Indicates the [character encoding](https://developer.mozilla.org/en-US/docs/Glossary/Character_encoding) of the content.

For example, `utf-8`, `iso-8859-1`.

### mediaType

The media type (or MIME type) of the content. This consists of a type and subtype, separated by a slash.

For example, `text/html`, `application/json`, `image/png`.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

## Methods

### toString(): string

Returns the string representation of the header value.

### from(value: string | ContentTypeInit | null): ContentType

Parse a Content-Type header value.

#### value

The header value (string, init object, or null)