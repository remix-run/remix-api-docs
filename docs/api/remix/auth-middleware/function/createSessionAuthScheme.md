---
title: createSessionAuthScheme
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/schemes/session.ts#L30
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

## Params

### `options`

Session reading, verification, and invalidation hooks.

## Returns

An auth scheme for use with `auth()`.