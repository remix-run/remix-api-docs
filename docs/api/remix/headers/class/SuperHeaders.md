---
title: SuperHeaders
source: https://github.com/remix-run/remix/blob/main/packages/headers/src/lib/super-headers.ts#L338
---

# SuperHeaders

## Summary

An enhanced JavaScript `Headers` interface with lazy, type-safe property accessors.

## Signature

```ts
class SuperHeaders {
  constructor(init: SuperHeadersInit): SuperHeaders;

  // Accessors
  get accept(): Accept;
  get acceptCharset(): string | null;
  get acceptEncoding(): AcceptEncoding;
  get acceptLanguage(): AcceptLanguage;
  get acceptPatch(): string | null;
  get acceptPost(): string | null;
  get acceptRanges(): string | null;
  get accessControlAllowCredentials(): string | null;
  get accessControlAllowHeaders(): string | null;
  get accessControlAllowMethods(): string | null;
  get accessControlAllowOrigin(): string | null;
  get accessControlExposeHeaders(): string | null;
  get accessControlMaxAge(): number | null;
  get accessControlRequestHeaders(): string | null;
  get accessControlRequestMethod(): string | null;
  get age(): number | null;
  get allow(): string | null;
  get authorization(): string | null;
  get cacheControl(): CacheControl;
  get connection(): string | null;
  get contentDisposition(): ContentDisposition;
  get contentEncoding(): string | null;
  get contentLanguage(): string | null;
  get contentLength(): number | null;
  get contentLocation(): string | null;
  get contentRange(): ContentRange;
  get contentSecurityPolicy(): string | null;
  get contentSecurityPolicyReportOnly(): string | null;
  get contentType(): ContentType;
  get cookie(): Cookie;
  get crossOriginEmbedderPolicy(): string | null;
  get crossOriginEmbedderPolicyReportOnly(): string | null;
  get crossOriginOpenerPolicy(): string | null;
  get crossOriginOpenerPolicyReportOnly(): string | null;
  get crossOriginResourcePolicy(): string | null;
  get date(): Date | null;
  get etag(): string | null;
  get expect(): string | null;
  get expires(): Date | null;
  get forwarded(): string | null;
  get from(): string | null;
  get host(): string | null;
  get idempotencyKey(): string | null;
  get ifMatch(): IfMatch;
  get ifModifiedSince(): Date | null;
  get ifNoneMatch(): IfNoneMatch;
  get ifRange(): IfRange;
  get ifUnmodifiedSince(): Date | null;
  get keepAlive(): string | null;
  get lastModified(): Date | null;
  get link(): string | null;
  get location(): string | null;
  get maxForwards(): number | null;
  get origin(): string | null;
  get permissionsPolicy(): string | null;
  get pragma(): string | null;
  get prefer(): string | null;
  get preferenceApplied(): string | null;
  get range(): Range;
  get referer(): string | null;
  get referrerPolicy(): string | null;
  get refresh(): string | null;
  get retryAfter(): string | null;
  get server(): string | null;
  get setCookie(): SetCookieList;
  get strictTransportSecurity(): string | null;
  get traceparent(): string | null;
  get tracestate(): string | null;
  get upgradeInsecureRequests(): number | null;
  get userAgent(): string | null;
  get vary(): Vary;
  get via(): string | null;
  get wwwAuthenticate(): string | null;
  get xContentTypeOptions(): string | null;
  get xForwardedFor(): string | null;
  get xForwardedHost(): string | null;
  get xForwardedProto(): string | null;
  get xFrameOptions(): string | null;
  get xPoweredBy(): string | null;
  get xRobotsTag(): string | null;

  // Methods
  [iterator](): HeadersIterator<[string, string]>;
  append(name: string, value: string): void;
  delete(name: string): void;
  entries(): HeadersIterator<[string, string]>;
  forEach(
    callbackfn: (value: string, key: string, parent: Headers) => void,
    thisArg: any,
  ): void;
  get(name: string): string | null;
  getSetCookie(): string[];
  has(name: string): boolean;
  keys(): HeadersIterator<string>;
  set(name: string, value: string): void;
  values(): HeadersIterator<string>;
}

```

## Accessors

### `accept`

### `acceptCharset`

### `acceptEncoding`

### `acceptLanguage`

### `acceptPatch`

### `acceptPost`

### `acceptRanges`

### `accessControlAllowCredentials`

### `accessControlAllowHeaders`

### `accessControlAllowMethods`

### `accessControlAllowOrigin`

### `accessControlExposeHeaders`

### `accessControlMaxAge`

### `accessControlRequestHeaders`

### `accessControlRequestMethod`

### `age`

### `allow`

### `authorization`

### `cacheControl`

### `connection`

### `contentDisposition`

### `contentEncoding`

### `contentLanguage`

### `contentLength`

### `contentLocation`

### `contentRange`

### `contentSecurityPolicy`

### `contentSecurityPolicyReportOnly`

### `contentType`

### `cookie`

### `crossOriginEmbedderPolicy`

### `crossOriginEmbedderPolicyReportOnly`

### `crossOriginOpenerPolicy`

### `crossOriginOpenerPolicyReportOnly`

### `crossOriginResourcePolicy`

### `date`

### `etag`

### `expect`

### `expires`

### `forwarded`

### `from`

### `host`

### `idempotencyKey`

### `ifMatch`

### `ifModifiedSince`

### `ifNoneMatch`

### `ifRange`

### `ifUnmodifiedSince`

### `keepAlive`

### `lastModified`

### `link`

### `location`

### `maxForwards`

### `origin`

### `permissionsPolicy`

### `pragma`

### `prefer`

### `preferenceApplied`

### `range`

### `referer`

### `referrerPolicy`

### `refresh`

### `retryAfter`

### `server`

### `setCookie`

### `strictTransportSecurity`

### `traceparent`

### `tracestate`

### `upgradeInsecureRequests`

### `userAgent`

### `vary`

### `via`

### `wwwAuthenticate`

### `xContentTypeOptions`

### `xForwardedFor`

### `xForwardedHost`

### `xForwardedProto`

### `xFrameOptions`

### `xPoweredBy`

### `xRobotsTag`

## Methods

### `[iterator](): HeadersIterator<[string, string]>`



### `append(name: string, value: string): void`

The **`append()`** method of the Headers interface appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append)



### `delete(name: string): void`

The **`delete()`** method of the Headers interface deletes a header from the current `Headers` object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete)



### `entries(): HeadersIterator<[string, string]>`

Returns an iterator allowing to go through all key/value pairs contained in this object.



### `forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg: any): void`



### `get(name: string): string | null`

The **`get()`** method of the Headers interface returns a byte string of all the values of a header within a `Headers` object with a given name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get)



### `getSetCookie(): string[]`

The **`getSetCookie()`** method of the Headers interface returns an array containing the values of all Set-Cookie headers associated with a response.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie)



### `has(name: string): boolean`

The **`has()`** method of the Headers interface returns a boolean stating whether a `Headers` object contains a certain header.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has)



### `keys(): HeadersIterator<string>`

Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.



### `set(name: string, value: string): void`

The **`set()`** method of the Headers interface sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set)



### `values(): HeadersIterator<string>`

Returns an iterator allowing to go through all values of the key/value pairs contained in this object.

