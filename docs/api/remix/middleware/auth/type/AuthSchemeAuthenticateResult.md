---
title: AuthSchemeAuthenticateResult
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