---
title: CacheControl
---

# CacheControl

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/headers/src/lib/cache-control.ts#L164" target="_blank">View Source</a>

## Summary

The value of a `Cache-Control` HTTP header.

[MDN `Cache-Control` Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

[HTTP/1.1 Specification](https://datatracker.ietf.org/doc/html/rfc7234#section-5.2)

## Signature

```ts
class CacheControl {
  constructor(init: string | CacheControlInit): CacheControl;

  // Properties
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

  // Methods
  toString(): string;
  from(value: string | CacheControlInit | null): CacheControl;
}

```

## Constructor Params

### init

## Properties

### immutable

Whether the `immutable` directive is present.

### maxAge

The configured `max-age` directive value in seconds.

### maxStale

The configured `max-stale` directive value in seconds.

### minFresh

The configured `min-fresh` directive value in seconds.

### mustRevalidate

Whether the `must-revalidate` directive is present.

### mustUnderstand

Whether the `must-understand` directive is present.

### noCache

Whether the `no-cache` directive is present.

### noStore

Whether the `no-store` directive is present.

### noTransform

Whether the `no-transform` directive is present.

### onlyIfCached

Whether the `only-if-cached` directive is present.

### private

Whether the `private` directive is present.

### proxyRevalidate

Whether the `proxy-revalidate` directive is present.

### public

Whether the `public` directive is present.

### sMaxage

The configured `s-maxage` directive value in seconds.

### staleIfError

The configured `stale-if-error` directive value in seconds.

### staleWhileRevalidate

The configured `stale-while-revalidate` directive value in seconds.

## Methods

### toString(): string

Returns the string representation of the header value.

### from(value: string | CacheControlInit | null): CacheControl

Parse a Cache-Control header value.

#### value

The header value (string, init object, or null)