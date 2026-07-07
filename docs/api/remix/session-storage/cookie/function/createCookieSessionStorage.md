---
title: createCookieSessionStorage
source: https://github.com/remix-run/remix/blob/main/packages/session/src/lib/session-storage/cookie.ts#L12
---

# createCookieSessionStorage

## Summary

Creates a session storage that stores all session data in the session cookie itself.

Note: This is suitable for use in production. However, the total size of the session cookie is limited
to the browser's maximum cookie size, typically 4096 bytes.

## Signature

```ts
function createCookieSessionStorage(): SessionStorage;

```

## Returns

The session storage