---
title: SessionAuthSchemeOptions
---

# SessionAuthSchemeOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth-middleware/src/lib/schemes/session.ts#L9" target="_blank">View Source</a>

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

### code

Failure code reported when `verify()` rejects the session auth value.

### message

Failure message reported when `verify()` rejects the session auth value.

### name

Method name exposed on the resolved auth state.

## Methods

### invalidate(session: Session, context: RequestContext): void | Promise<void>

Clears stale or invalid session auth state after verification fails.

#### session

#### context

### read(session: Session, context: RequestContext): session_value | null | undefined

Reads the auth value persisted in the session for the current request.

#### session

#### context

### verify(value: session_value, context: RequestContext): identity | Promise<identity | null> | null

Verifies the session auth value and returns the resolved identity on success.

#### value

#### context