---
title: Cookie
---

# Cookie

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/cookie/src/lib/cookie.ts#L53" target="_blank">View Source</a>

## Summary

Represents a HTTP cookie.

Supports parsing and serializing the cookie to/from `Cookie` and `Set-Cookie` headers.

Also supports cryptographic signing of the cookie value to ensure it's not tampered with, and
secret rotation to easily rotate secrets without breaking existing cookies.

## Signature

```ts
class Cookie {
  constructor(name: string, options: CookieOptions): Cookie;

  // Accessors
  get domain(): string | undefined;
  get expires(): Date | undefined;
  get httpOnly(): boolean;
  get maxAge(): number | undefined;
  get name(): string;
  get partitioned(): boolean;
  get path(): string;
  get sameSite(): SameSiteValue;
  get secure(): boolean;
  get signed(): boolean;

  // Methods
  parse(headerValue: string | null): Promise<string | null>;
  serialize(value: string, props: CookieProperties): Promise<string>;
}

```

## Constructor Params

### name

The name of the cookie

### options

Options for the cookie

## Accessors

### domain

The domain of the cookie.

[MDN Reference](https://developer.mozilla.org/en-US/Web/HTTP/Headers/Set-Cookie#domaindomain-value)

### expires

The expiration date of the cookie.

[MDN Reference](https://developer.mozilla.org/en-US/Web/HTTP/Headers/Set-Cookie#expiresdate)

### httpOnly

True if the cookie is HTTP-only.

[MDN Reference](https://developer.mozilla.org/en-US/Web/HTTP/Headers/Set-Cookie#httponly)

### maxAge

The maximum age of the cookie in seconds.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#max-agenumber)

### name

The name of the cookie.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie-namecookie-value)

### partitioned

True if the cookie is partitioned.

[MDN Reference](https://developer.mozilla.org/en-US/Web/HTTP/Headers/Set-Cookie#partitioned)

### path

The path of the cookie.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value)

### sameSite

The `SameSite` attribute of the cookie.

[MDN Reference](https://developer.mozilla.org/en-US/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)

### secure

True if the cookie is secure (only sent over HTTPS).

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#secure)

### signed

True if this cookie uses one or more secrets for verification.

## Methods

### parse(headerValue: string | null): Promise<string | null>

Extracts the value of this cookie from a `Cookie` header value.

#### headerValue

The `Cookie` header to parse

### serialize(value: string, props: CookieProperties): Promise<string>

Returns the value to use in a `Set-Cookie` header for this cookie.

#### value

The value to serialize

#### props

Additional properties to use when serializing the cookie