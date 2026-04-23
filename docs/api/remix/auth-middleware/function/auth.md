---
title: auth
---

# auth

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth-middleware/src/lib/auth.ts#L136" target="_blank">View Source</a>

## Summary

Loads auth state for the current request by running each configured auth scheme in order.

## Signature

```ts
function auth<schemes extends readonly AuthScheme<any>[]>(
  options: AuthOptions<schemes>,
): Middleware<any, any, SetAuthContextTransform<AuthForSchemes<schemes>>>;

```

## Params

### options

Auth scheme configuration for the middleware.

## Returns

Middleware that resolves auth state into `context.get(Auth)`.