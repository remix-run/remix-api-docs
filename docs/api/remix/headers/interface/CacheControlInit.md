---
title: CacheControlInit
---

# CacheControlInit

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/cache-control.ts#L10" target="_blank">View Source</a>

## Summary

Initializer for a `Cache-Control` header value.

## Signature

```ts
interface CacheControlInit {
  immutable?: true;
  maxAge?: number;
  maxStale?: number;
  minFresh?: number;
  mustRevalidate?: true;
  mustUnderstand?: true;
  noCache?: true;
  noStore?: true;
  noTransform?: true;
  onlyIfCached?: true;
  private?: true;
  proxyRevalidate?: true;
  public?: true;
  sMaxage?: number;
  staleIfError?: number;
  staleWhileRevalidate?: number;
}

```

## Properties

### immutable

The `immutable` **response directive** indicates that the response will not be updated while
it's [fresh](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age).

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#public)

### maxAge

The `max-age=N` **request directive** indicates that the client allows a stored response that
is generated on the origin server within _N_ seconds — where _N_ may be any non-negative
integer (including `0`).

The `max-age=N` **response directive** indicates that the response remains
[fresh](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age)
until _N_ seconds after the response is generated.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#max-age)

### maxStale

The `max-stale=N` **request directive** indicates that the client allows a stored response
that is [stale](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age)
within _N_ seconds.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#max-stale)

### minFresh

The `min-fresh=N` **request directive** indicates that the client allows a stored response
that is [fresh](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age)
for at least _N_ seconds.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#min-fresh)

### mustRevalidate

The `must-revalidate` **response directive** indicates that the response can be stored in
caches and can be reused while [fresh](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age).
If the response becomes [stale](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age),
it must be validated with the origin server before reuse.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#must-revalidate)

### mustUnderstand

The `must-understand` **response directive** indicates that a cache should store the response
only if it understands the requirements for caching based on status code.

`must-understand` should be coupled with `no-store` for fallback behavior.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#must-understand)

### noCache

The `no-cache` **request directive** asks caches to validate the response with the origin
server before reuse. If you want caches to always check for content updates while reusing
stored content, `no-cache` is the directive to use.

The `no-cache` **response directive** indicates that the response can be stored in caches, but
the response must be validated with the origin server before each reuse, even when the cache
is disconnected from the origin server.

`no-cache` allows clients to request the most up-to-date response even if the cache has a
[fresh](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age)
response.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#no-cache)

### noStore

The `no-store` **request directive** allows a client to request that caches refrain from
storing the request and corresponding response — even if the origin server's response could
be stored.

The `no-store` **response directive** indicates that any caches of any kind (private or shared)
should not store this response.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#no-store)

### noTransform

`no-transform` indicates that any intermediary (regardless of whether it implements a cache)
shouldn't transform the response contents.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#no-transform)

### onlyIfCached

The client indicates that cache should obtain an already-cached response. If a cache has
stored a response, it's reused.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#only-if-cached)

### private

The `private` **response directive** indicates that the response can be stored only in a
private cache (e.g. local caches in browsers).

You should add the `private` directive for user-personalized content, especially for responses
received after login and for sessions managed via cookies.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#private)

### proxyRevalidate

The `proxy-revalidate` **response directive** is the equivalent of `must-revalidate`, but
specifically for shared caches only.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#proxy-revalidate)

### public

The `public` **response directive** indicates that the response can be stored in a shared
cache. Responses for requests with `Authorization` header fields must not be stored in a
shared cache; however, the `public` directive will cause such responses to be stored in a
shared cache.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#public)

### sMaxage

The `s-maxage` **response directive** also indicates how long the response is
[fresh](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) for (similar to `max-age`) —
but it is specific to shared caches, and they will ignore `max-age` when it is present.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage)

### staleIfError

The `stale-if-error` **response directive** indicates that the cache can reuse a
[stale response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age)
when an upstream server generates an error, or when the error is generated locally. Here, an
error is considered any response with a status code of 500, 502, 503, or 504.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error)

### staleWhileRevalidate

The `stale-while-revalidate` **response directive** indicates that the cache could reuse a
stale response while it revalidates it to a cache.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate)