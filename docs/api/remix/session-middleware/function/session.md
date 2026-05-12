---
title: session
source: https://github.com/remix-run/remix/blob/main/packages/session-middleware/src/lib/session.ts#L12
---

# session

## Summary

Middleware that manages request session state on request context.

## Signature

```ts
function session(
  sessionCookie: Cookie,
  sessionStorage: SessionStorage,
): Middleware<{ key: typeof Session; property: "session"; value: Session }>;

```

## Parameters

### `sessionCookie`

The session cookie to use

### `sessionStorage`

The storage backend for session data

## Returns

The session middleware