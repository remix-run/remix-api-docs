---
title: getCsrfToken
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