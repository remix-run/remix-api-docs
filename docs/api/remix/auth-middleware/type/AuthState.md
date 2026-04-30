---
title: AuthState
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/auth.ts#L47
---

# AuthState

## Summary

Request auth state stored in the router context.

## Signature

```ts
type AuthState<identity> = GoodAuth<identity> | BadAuth;

```