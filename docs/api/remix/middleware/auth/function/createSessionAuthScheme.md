---
title: createSessionAuthScheme
---

# createSessionAuthScheme

## Summary

Creates an auth scheme that resolves identity from session data loaded by `session()`.

## Signature

```ts
function createSessionAuthScheme<identity, session_value>(
  options: SessionAuthSchemeOptions<identity, session_value>,
): AuthScheme<identity>;

```

## Parameters

### `options`

Session reading, verification, and invalidation hooks.

## Returns

An auth scheme for use with `auth()`.