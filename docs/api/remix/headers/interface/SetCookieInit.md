---
title: SetCookieInit
---

# SetCookieInit

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/set-cookie.ts#L66" target="_blank">View Source</a>

## Summary

Initializer for a `Set-Cookie` header value.

## Signature

```ts
interface SetCookieInit {
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
}

```

## Properties

### domain

The domain of the cookie. For example, `example.com`.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value)

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

### name

The name of the cookie.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie-namecookie-value)

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

### secure

Indicates the cookie should only be sent over HTTPS.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#secure)

### value

The value of the cookie.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie-namecookie-value)