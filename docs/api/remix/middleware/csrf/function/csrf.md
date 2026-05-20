---
title: csrf
---

# csrf

## Summary

Session-backed CSRF protection middleware.

This middleware requires the session middleware to run before it.

## Signature

```ts
function csrf(options: CsrfOptions): Middleware;

```

## Parameters

### `options`

CSRF options

## Returns

CSRF middleware