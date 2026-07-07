---
title: Auth
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/auth.ts#L48
---

# Auth

## Summary

Context key used to read auth state with `context.get(Auth)`.
The `auth()` middleware also installs auth state as `context.auth`.

## Signature

```ts
const Auth: ContextKey<AuthState<unknown>>;

```