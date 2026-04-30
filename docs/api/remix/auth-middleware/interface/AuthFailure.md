---
title: AuthFailure
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/auth.ts#L11
---

# AuthFailure

## Summary

Failure details for an unauthenticated request.

## Signature

```ts
interface AuthFailure {
  challenge?: string;
  code: "missing_credentials" | "invalid_credentials";
  message: string;
  method?: string;
}

```

## Properties

### challenge

Optional challenge value for `WWW-Authenticate`.

### code

Failure category used by built-in auth middleware and schemes.

### message

Human-readable explanation of the auth failure.

### method

Auth method that reported the failure.