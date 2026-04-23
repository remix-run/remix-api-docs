---
title: AuthSchemeResult
---

# AuthSchemeResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth-middleware/src/lib/auth.ts#L91" target="_blank">View Source</a>

## Summary

Non-skipped results an auth scheme can return.

## Signature

```ts
type AuthSchemeResult<identity> =
  | AuthSchemeSuccess<identity>
  | AuthSchemeFailure;

```