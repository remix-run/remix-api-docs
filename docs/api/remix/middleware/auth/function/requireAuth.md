---
title: requireAuth
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