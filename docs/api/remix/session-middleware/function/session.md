---
title: session
---

# session

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/session-middleware/src/lib/session.ts#L12" target="_blank">View Source</a>

## Summary

Middleware that manages `context.session` based on the session cookie.

## Signature

```ts
function session(
  sessionCookie: Cookie,
  sessionStorage: SessionStorage,
): Middleware;

```

## Params

### sessionCookie

The session cookie to use

### sessionStorage

The storage backend for session data

## Returns

The session middleware