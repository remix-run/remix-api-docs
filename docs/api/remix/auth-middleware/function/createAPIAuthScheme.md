---
title: createAPIAuthScheme
---

# createAPIAuthScheme

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth-middleware/src/lib/schemes/api-key.ts#L23" target="_blank">View Source</a>

## Summary

Creates an auth scheme that reads API keys from a request header.

## Signature

```ts
function createAPIAuthScheme<identity>(
  options: APIAuthSchemeOptions<identity>,
): AuthScheme<identity>;

```

## Params

### options

Header parsing and key verification options.

## Returns

An auth scheme for use with `auth()`.