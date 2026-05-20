---
title: AuthSchemeResult
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