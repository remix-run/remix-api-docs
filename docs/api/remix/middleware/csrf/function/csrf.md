---
title: "csrf"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/csrf-middleware/src/lib/csrf.ts#L127"
---

# csrf

## Summary

Session-backed CSRF protection middleware.

This middleware requires the session middleware to run before it.
By default, submitted tokens are read from request headers and parsed form fields only.

## Signature

```ts
function csrf(options: CsrfOptions): Middleware

```

## Parameters

### `options`

CSRF options

## Returns

CSRF middleware