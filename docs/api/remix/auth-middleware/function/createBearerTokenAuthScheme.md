---
title: createBearerTokenAuthScheme
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/schemes/bearer.ts#L29
---

# createBearerTokenAuthScheme

## Summary

Creates an auth scheme that reads bearer tokens from a request header.

## Signature

```ts
function createBearerTokenAuthScheme<identity>(
  options: BearerTokenAuthSchemeOptions<identity>,
): AuthScheme<identity>;

```

## Params

### `options`

Header parsing and token verification options.

## Returns

An auth scheme for use with `auth()`.