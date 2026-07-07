---
title: requireAuth
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/require-auth.ts#L20
---

# requireAuth

## Summary

Enforces that `auth()` has already resolved a successful auth state for the current request.

## Signature

```ts
function requireAuth<identity>(
  options: RequireAuthOptions,
): Middleware<{
  key: ContextKey<AuthState<unknown>>;
  property: "auth";
  value: GoodAuth<identity>;
}>;

```

## Parameters

### `options`

Failure handling options for unauthenticated requests.

## Returns

Middleware that allows authenticated requests through, rejects anonymous ones, and
narrows auth state on request context.