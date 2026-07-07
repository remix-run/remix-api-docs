---
title: SessionAuthSchemeOptions
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/schemes/session.ts#L9
---

# SessionAuthSchemeOptions

## Summary

Options for creating a session-backed auth scheme.

## Signature

```ts
interface SessionAuthSchemeOptions<identity, session_value> {
  code?: "missing_credentials" | "invalid_credentials";
  message?: string;
  name?: string;
  invalidate(session: Session, context: RequestContext): void | Promise<void>;
  read(
    session: Session,
    context: RequestContext,
  ): session_value | null | undefined;
  verify(
    value: session_value,
    context: RequestContext,
  ): identity | Promise<identity | null> | null;
}

```

## Properties

### `code`

Failure code reported when `verify()` rejects the session auth value.

### `message`

Failure message reported when `verify()` rejects the session auth value.

### `name`

Method name exposed on the resolved auth state.

## Methods

### `invalidate(session: Session, context: RequestContext): void | Promise<void>`

Clears stale or invalid session auth state after verification fails.



### `read(session: Session, context: RequestContext): session_value | null | undefined`

Reads the auth value persisted in the session for the current request.



### `verify(value: session_value, context: RequestContext): identity | Promise<identity | null> | null`

Verifies the session auth value and returns the resolved identity on success.

