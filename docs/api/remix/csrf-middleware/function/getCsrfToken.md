---
title: getCsrfToken
---

# getCsrfToken

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/csrf-middleware/src/lib/csrf.ts#L166" target="_blank">View Source</a>

## Summary

Gets the CSRF token from the session. Creates one if missing.

## Signature

```ts
function getCsrfToken(context: RequestContext, tokenKey: string): string;

```

## Params

### context

Request context with a started session

### tokenKey

Session key that stores the token

## Returns

The active CSRF token