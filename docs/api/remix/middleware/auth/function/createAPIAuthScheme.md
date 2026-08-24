---
title: createAPIAuthScheme
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/auth-middleware/src/lib/schemes/api-key.ts#L23
---

# createAPIAuthScheme

## Summary

Creates an auth scheme that reads API keys from a request header.

## Signature

```ts
function createAPIAuthScheme<identity>(
  options: APIAuthSchemeOptions<identity>,
): AuthScheme<identity>

```

## Parameters

### `options`

Header parsing and key verification options.

## Returns

An auth scheme for use with `auth()`.