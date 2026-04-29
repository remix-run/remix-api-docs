---
title: BadAuth
---

# BadAuth

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth-middleware/src/lib/auth.ts#L37" target="_blank">View Source</a>

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

### error

Failure details when authentication was attempted and rejected.

### ok

Indicates that the current request is not authenticated.