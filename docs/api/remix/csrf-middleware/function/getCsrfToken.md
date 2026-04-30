---
title: getCsrfToken
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/csrf-middleware/src/lib/csrf.ts#L166
---

# getCsrfToken

## Summary

Gets the CSRF token from the session. Creates one if missing.

## Signature

```ts
function getCsrfToken(context: RequestContext, tokenKey: string): string;

```

## Params

### `context`

Request context with a started session

### `tokenKey`

Session key that stores the token

## Returns

The active CSRF token