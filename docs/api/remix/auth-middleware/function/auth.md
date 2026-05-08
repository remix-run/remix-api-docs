---
title: auth
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/auth.ts#L149
---

# auth

## Summary

Loads auth state for the current request by running each configured auth scheme in order.

## Signature

```ts
function auth<schemes extends readonly AuthScheme<any>[]>(
  options: AuthOptions<schemes>,
): Middleware<AuthContextEntry<AuthForSchemes<schemes>>>;

```

## Parameters

### `options`

Auth scheme configuration for the middleware.

## Returns

Middleware that resolves auth state into `context.get(Auth)`.