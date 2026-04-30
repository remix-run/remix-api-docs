---
title: SetCookie
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/headers/src/lib/set-cookie.ts#L88
---

# SetCookie

## Summary

The value of a `Set-Cookie` HTTP header.

[MDN `Set-Cookie` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1)

## Signature

```ts
class SetCookie {
  constructor(init: string | SetCookieInit): SetCookie;

  // Properties
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  maxAge?: number;
  name?: string;
  partitioned?: boolean;
  path?: string;
  sameSite?: SameSiteValue;
  secure?: boolean;
  value?: string;

  // Methods
  toString(): string;
  from(value: string | SetCookieInit | null): SetCookie;
}

```

## Constructor Params

### `init`

## Properties

### `domain`

The cookie domain attribute.

### `expires`

The cookie expiration date.

### `httpOnly`

Whether the `HttpOnly` attribute is present.

### `maxAge`

The `Max-Age` attribute value in seconds.

### `name`

The cookie name.

### `partitioned`

Whether the `Partitioned` attribute is present.

### `path`

The cookie path attribute.

### `sameSite`

The `SameSite` attribute value.

### `secure`

Whether the `Secure` attribute is present.

### `value`

The cookie value.

## Methods

### `toString(): string`

Returns the string representation of the header value.

### `from(value: string | SetCookieInit | null): SetCookie`

Parse a Set-Cookie header value.

#### `value`

The header value (string, init object, or null)