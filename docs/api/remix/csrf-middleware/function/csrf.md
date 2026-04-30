---
title: csrf
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/csrf-middleware/src/lib/csrf.ts#L117
---

# csrf

## Summary

Session-backed CSRF protection middleware.

This middleware requires the session middleware to run before it.

## Signature

```ts
function csrf(options: CsrfOptions): Middleware;

```

## Params

### `options`

CSRF options

## Returns

CSRF middleware