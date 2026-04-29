---
title: AuthSchemeAuthenticateResult
---

# AuthSchemeAuthenticateResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth-middleware/src/lib/auth.ts#L96" target="_blank">View Source</a>

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