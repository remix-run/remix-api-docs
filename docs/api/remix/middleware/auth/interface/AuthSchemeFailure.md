---
title: AuthSchemeFailure
---

# AuthSchemeFailure

## Summary

Failure result returned by an auth scheme.

## Signature

```ts
interface AuthSchemeFailure {
  challenge?: string;
  code?: "missing_credentials" | "invalid_credentials";
  message?: string;
  status: "failure";
}

```

## Properties

### `challenge`

Optional challenge value for `WWW-Authenticate`.

### `code`

Failure category reported by the scheme.

### `message`

Human-readable explanation of the failure.

### `status`

Marks the scheme result as an authentication failure.