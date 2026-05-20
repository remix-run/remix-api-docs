---
title: createBearerTokenAuthScheme
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

## Parameters

### `options`

Header parsing and token verification options.

## Returns

An auth scheme for use with `auth()`.