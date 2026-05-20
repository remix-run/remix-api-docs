---
title: AuthSchemeAuthenticateResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/auth-middleware/src/lib/auth.ts#L82
---

# AuthSchemeAuthenticateResult

## Summary

Full return type for an auth scheme, including skipped requests.

## Signature

```ts
type AuthSchemeAuthenticateResult<identity> =
  | AuthSchemeResult<identity>
  | null
  | undefined
  | void;

```