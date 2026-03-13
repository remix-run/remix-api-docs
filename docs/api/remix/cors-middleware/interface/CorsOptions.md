---
title: CorsOptions
---

# CorsOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/cors-middleware/src/lib/cors.ts#L52" target="_blank">View Source</a>

## Summary

Options for CORS middleware.

## Signature

```ts
interface CorsOptions {
  allowedHeaders?: readonly string[] | CorsAllowedHeadersResolver;
  allowPrivateNetwork?: boolean;
  credentials?: boolean;
  exposedHeaders?: readonly string[];
  maxAge?: number;
  methods?: readonly string[];
  origin?: CorsOrigin;
  preflightContinue?: boolean;
  preflightStatusCode?: number;
}

```

## Properties

### allowedHeaders

Allowed request headers for preflight responses.

Defaults to reflecting Access-Control-Request-Headers.

### allowPrivateNetwork

Include Access-Control-Allow-Private-Network: true when requested.

### credentials

Include Access-Control-Allow-Credentials: true.

### exposedHeaders

Exposed response headers for non-preflight requests.

### maxAge

Access-Control-Max-Age value for preflight responses (seconds).

### methods

Allowed methods for preflight responses.

### origin

Allowed origins. Defaults to '*'.

- `true` reflects the request Origin
- `false` disables CORS headers
- `'*'` allows all origins
- `string`/`RegExp`/array allow matching origins
- `function` allows dynamic origin checks

### preflightContinue

Continue to downstream handlers for preflight requests.

### preflightStatusCode

Status code to use when short-circuiting preflight responses.