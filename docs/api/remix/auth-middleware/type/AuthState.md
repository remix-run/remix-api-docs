---
title: AuthState
---

# AuthState

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth-middleware/src/lib/auth.ts#L47" target="_blank">View Source</a>

## Summary

Request auth state stored in the router context.

## Signature

```ts
type AuthState<identity> = GoodAuth<identity> | BadAuth;

```