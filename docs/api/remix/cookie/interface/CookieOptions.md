---
title: CookieOptions
---

# CookieOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/cookie/src/lib/cookie.ts#L12" target="_blank">View Source</a>

## Summary

Options for creating a cookie.

## Signature

```ts
interface CookieOptions {
  decode?: (value: string) => string;
  domain?: string;
  encode?: (value: string) => string;
  expires?: Date;
  httpOnly?: boolean;
  maxAge?: number;
  partitioned?: boolean;
  path?: string;
  sameSite?: SameSiteValue;
  secrets?: string[];
  secure?: boolean;
}

```

## Properties

### decode

A function that decodes the cookie value. Decodes any URL-encoded sequences into their
original characters.

See [RFC 6265](https://tools.ietf.org/html/rfc6265#section-4.1.1) for more details.

### domain

The domain of the cookie. For example, `example.com`.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value)

### encode

A function that encodes the cookie value. Percent-encodes all characters that are not allowed
in a cookie value.

See [RFC 6265](https://tools.ietf.org/html/rfc6265#section-4.1.1) for more details.

### expires

The expiration date of the cookie. If not specified, the cookie is a session cookie that is
removed when the browser is closed.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#expiresdate)

### httpOnly

Indicates this cookie should not be accessible via JavaScript.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#httponly)

### maxAge

The maximum age of the cookie in seconds.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#max-age)

### partitioned

Indicates this cookie is a partitioned cookie.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#partitioned)

### path

The path of the cookie. For example, `/` or `/admin`.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value)

### sameSite

The `SameSite` attribute of the cookie. This attribute lets servers require that a cookie shouldn't be sent with
cross-site requests, which provides some protection against cross-site request forgery attacks.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)

### secrets

An array of secrets that may be used to sign/unsign the value of a cookie.

The array makes it easy to rotate secrets. New secrets should be added to
the beginning of the array. `cookie.serialize()` will always use the first
value in the array, but `cookie.parse()` may use any of them so that
cookies that were signed with older secrets still work.

### secure

Indicates the cookie should only be sent over HTTPS.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#secure)