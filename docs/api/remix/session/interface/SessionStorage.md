---
title: SessionStorage
source: https://github.com/remix-run/remix/blob/main/packages/session/src/lib/session-storage.ts#L10
---

# SessionStorage

## Summary

Stores and retrieves session data using values read from a session cookie.

Session storage implementations operate on cookie values. Use `remix/cookie` or
`remix/middleware/session` to parse incoming `Cookie` headers and serialize outgoing
`Set-Cookie` headers.

## Signature

```ts
interface SessionStorage {
  read(cookie: string | null): Promise<Session<Data, Data>>;
  save(session: Session): Promise<string | null>;
}

```

## Methods

### `read(cookie: string | null): Promise<Session<Data, Data>>`

Retrieve a session from storage using a value read from the session cookie.

#### Parameters

##### `cookie`

The stored session cookie value, or `null` if no session cookie is available

### `save(session: Session): Promise<string | null>`

Save session data in storage and return the value to write to the session cookie.

Note: If no session cookie should be set, this method returns `null`. If the session
should be destroyed, this method returns an empty string.

#### Parameters

##### `session`

The session to save