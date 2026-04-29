---
title: ContentType
---

# ContentType

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/headers/src/lib/content-type.ts#L35" target="_blank">View Source</a>

## Summary

The value of a `Content-Type` HTTP header.

[MDN `Content-Type` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7231#section-3.1.1.5)

## Signature

```ts
class ContentType {
  constructor(init: string | ContentTypeInit): ContentType;

  // Properties
  boundary?: string;
  charset?: string;
  mediaType?: string;

  // Methods
  toString(): string;
  from(value: string | ContentTypeInit | null): ContentType;
}

```

## Constructor Params

### init

## Properties

### boundary

Multipart boundary parameter value.

### charset

Character set parameter value.

### mediaType

Media type such as `text/html` or `application/json`.

## Methods

### toString(): string

Returns the string representation of the header value.

### from(value: string | ContentTypeInit | null): ContentType

Parse a Content-Type header value.

#### value

The header value (string, init object, or null)