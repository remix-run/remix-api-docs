---
title: AuthState
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/auth.ts#L42
---

# AuthState

## Summary

Request auth state stored in the router context.

## Signature

```ts
type AuthState<identity> = GoodAuth<identity> | BadAuth;

```