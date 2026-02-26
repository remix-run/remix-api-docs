---
title: SessionStorage
---

# SessionStorage

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/session/src/lib/session-storage.ts#L6" target="_blank">View Source</a>

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

### read(cookie: string | null): Promise<Session<Data, Data>>

Retrieve a new session from storage based on the session cookie.

#### cookie

The session cookie value, or `null` if no session cookie is available

### save(session: Session): Promise<string | null>

Save session data in storage and return the session cookie.

Note: If no session cookie should be set, this method returns `null`.

#### session

The session to save