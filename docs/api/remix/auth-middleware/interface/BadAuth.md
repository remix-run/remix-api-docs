---
title: BadAuth
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/auth.ts#L32
---

# BadAuth

## Summary

Auth state for a request that did not authenticate successfully.

## Signature

```ts
interface BadAuth {
  error?: AuthFailure;
  ok: false;
}

```

## Properties

### `error`

Failure details when authentication was attempted and rejected.

### `ok`

Indicates that the current request is not authenticated.