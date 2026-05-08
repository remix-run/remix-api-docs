---
title: SuperHeadersPropertyInit
source: https://github.com/remix-run/remix/blob/main/packages/headers/src/lib/super-headers.ts#L30
---

# SuperHeadersPropertyInit

## Summary

Property-based initializer for [`SuperHeaders`](/api/remix/headers/class/SuperHeaders/).

## Signature

```ts
interface SuperHeadersPropertyInit {
  accept?: string | AcceptInit | null;
  acceptCharset?: StringInit | null;
  acceptEncoding?: string | AcceptEncodingInit | null;
  acceptLanguage?: string | AcceptLanguageInit | null;
  acceptPatch?: StringInit | null;
  acceptPost?: StringInit | null;
  acceptRanges?: StringInit | null;
  accessControlAllowCredentials?: string | null;
  accessControlAllowHeaders?: StringInit | null;
  accessControlAllowMethods?: StringInit | null;
  accessControlAllowOrigin?: string | null;
  accessControlExposeHeaders?: StringInit | null;
  accessControlMaxAge?: string | number | null;
  accessControlRequestHeaders?: StringInit | null;
  accessControlRequestMethod?: string | null;
  age?: string | number | null;
  allow?: StringInit | null;
  authorization?: string | null;
  cacheControl?: string | CacheControlInit | null;
  connection?: StringInit | null;
  contentDisposition?: string | ContentDispositionInit | null;
  contentEncoding?: StringInit | null;
  contentLanguage?: StringInit | null;
  contentLength?: string | number | null;
  contentLocation?: string | null;
  contentRange?: string | ContentRangeInit | null;
  contentSecurityPolicy?: string | null;
  contentSecurityPolicyReportOnly?: string | null;
  contentType?: string | ContentTypeInit | null;
  cookie?: string | CookieInit | null;
  crossOriginEmbedderPolicy?: string | null;
  crossOriginEmbedderPolicyReportOnly?: string | null;
  crossOriginOpenerPolicy?: string | null;
  crossOriginOpenerPolicyReportOnly?: string | null;
  crossOriginResourcePolicy?: string | null;
  date?: string | DateInit | null;
  etag?: string | null;
  expect?: string | null;
  expires?: string | DateInit | null;
  forwarded?: string | null;
  from?: string | null;
  host?: string | null;
  idempotencyKey?: string | null;
  ifMatch?: string | string[] | IfMatchInit | null;
  ifModifiedSince?: string | DateInit | null;
  ifNoneMatch?: string | string[] | IfNoneMatchInit | null;
  ifRange?: string | Date | null;
  ifUnmodifiedSince?: string | DateInit | null;
  keepAlive?: string | null;
  lastModified?: string | DateInit | null;
  link?: StringInit | null;
  location?: string | null;
  maxForwards?: string | number | null;
  origin?: string | null;
  permissionsPolicy?: StringInit | null;
  pragma?: StringInit | null;
  prefer?: StringInit | null;
  preferenceApplied?: StringInit | null;
  range?: string | RangeInit | null;
  referer?: string | null;
  referrerPolicy?: string | null;
  refresh?: string | null;
  retryAfter?: string | null;
  server?: string | null;
  setCookie?: SetCookieValue | readonly SetCookieValue[] | null;
  strictTransportSecurity?: string | null;
  traceparent?: string | null;
  tracestate?: StringInit | null;
  upgradeInsecureRequests?: string | number | null;
  userAgent?: string | null;
  vary?: string | string[] | VaryInit | null;
  via?: StringInit | null;
  wwwAuthenticate?: StringInit | null;
  xContentTypeOptions?: string | null;
  xForwardedFor?: StringInit | null;
  xForwardedHost?: string | null;
  xForwardedProto?: string | null;
  xFrameOptions?: string | null;
  xPoweredBy?: string | null;
  xRobotsTag?: StringInit | null;
}

```