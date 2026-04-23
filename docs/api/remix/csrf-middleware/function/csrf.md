---
title: csrf
---

# csrf

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/csrf-middleware/src/lib/csrf.ts#L117" target="_blank">View Source</a>

## Summary

Session-backed CSRF protection middleware.

This middleware requires the session middleware to run before it.

## Signature

```ts
function csrf(options: CsrfOptions): Middleware;

```

## Params

### options

CSRF options

## Returns

CSRF middleware