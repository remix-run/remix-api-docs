---
title: "session"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/session-middleware/src/lib/session.ts#L15"
---

# session

## Summary

Middleware that manages request session state on request context.
Session cookies default to HTTP-only and use Secure for HTTPS requests.
Explicit cookie settings take precedence.
Configured cookie lifetimes are also checked before loading session data.

## Signature

```ts
function session(
  sessionCookie: Cookie,
  sessionStorage: SessionStorage,
): Middleware<{ key: typeof Session; property: 'session'; value: Session }>

```

## Parameters

### `sessionCookie`

The session cookie to use

### `sessionStorage`

The storage backend for session data

## Returns

The session middleware