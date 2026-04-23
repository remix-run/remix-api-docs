---
title: requireAuth
---

# requireAuth

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth-middleware/src/lib/require-auth.ts#L47" target="_blank">View Source</a>

## Summary

Enforces that `auth()` has already resolved a successful auth state for the current request.

## Signature

```ts
function requireAuth<identity>(
  options: RequireAuthOptions,
): Middleware<any, any, RequireAuthContextTransform<identity>>;

```

## Params

### options

Failure handling options for unauthenticated requests.

## Returns

Middleware that allows authenticated requests through and rejects anonymous ones.