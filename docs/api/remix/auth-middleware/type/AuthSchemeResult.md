---
title: AuthSchemeResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/auth.ts#L91
---

# AuthSchemeResult

## Summary

Non-skipped results an auth scheme can return.

## Signature

```ts
type AuthSchemeResult<identity> =
  | AuthSchemeSuccess<identity>
  | AuthSchemeFailure;

```