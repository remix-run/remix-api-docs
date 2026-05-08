---
title: getCsrfToken
source: https://github.com/remix-run/remix/blob/main/packages/csrf-middleware/src/lib/csrf.ts#L178
---

# getCsrfToken

## Summary

Gets the CSRF token from the session. Creates one if missing.

## Signature

```ts
function getCsrfToken(context: AnyRequestContext, tokenKey: string): string;

```

## Parameters

### `context`

Request context with a started session

### `tokenKey`

Session key that stores the token

## Returns

The active CSRF token