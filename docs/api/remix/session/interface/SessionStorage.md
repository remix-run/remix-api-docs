---
title: SessionStorage
source: https://github.com/remix-run/remix/blob/main/packages/session/src/lib/session-storage.ts#L6
---

# SessionStorage

## Summary

An interface for storing and retrieving session data.

## Signature

```ts
interface SessionStorage {
  read(cookie: string | null): Promise<Session<Data, Data>>;
  save(session: Session): Promise<string | null>;
}

```

## Methods

### `read(cookie: string | null): Promise<Session<Data, Data>>`

Retrieve a new session from storage based on the session cookie.

#### Parameters

##### `cookie`

The session cookie value, or `null` if no session cookie is available

### `save(session: Session): Promise<string | null>`

Save session data in storage and return the session cookie.

Note: If no session cookie should be set, this method returns `null`.

#### Parameters

##### `session`

The session to save