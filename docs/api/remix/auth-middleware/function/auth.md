---
title: auth
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/auth.ts#L120
---

# auth

## Summary

Loads auth state for the current request by running each configured auth scheme in order.

## Signature

```ts
function auth<schemes extends readonly AuthScheme<any>[]>(
  options: AuthOptions<schemes>,
): Middleware<{
  key: ContextKey<AuthState<unknown>>;
  property: "auth";
  value: AuthForSchemes<schemes>;
}>;

```

## Parameters

### `options`

Auth scheme configuration for the middleware.

## Returns

Middleware that resolves auth state into `context.auth` and `context.get(Auth)`.