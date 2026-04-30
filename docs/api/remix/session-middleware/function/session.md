---
title: session
source: https://github.com/remix-run/remix/blob/main/packages/session-middleware/src/lib/session.ts#L14
---

# session

## Summary

Middleware that manages request session state on request context.

## Signature

```ts
function session(
  sessionCookie: Cookie,
  sessionStorage: SessionStorage,
): Middleware<any, any, SetSessionContextTransform>;

```

## Params

### `sessionCookie`

The session cookie to use

### `sessionStorage`

The storage backend for session data

## Returns

The session middleware