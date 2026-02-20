---
title: ContentTypeInit
---

# ContentTypeInit

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/content-type.ts#L7" target="_blank">View Source</a>

## Summary

Initializer for a `Content-Type` header value.

## Signature

```ts
interface ContentTypeInit {
  boundary?: string;
  charset?: string;
  mediaType?: string;
}

```

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