---
title: ContextWithAuth
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/auth.ts#L63
---

# ContextWithAuth

## Summary

Adds the [`Auth`](/api/remix/auth-middleware/variable/Auth/) context key — typed as the full [`AuthState`](/api/remix/auth-middleware/type/AuthState/)
union — onto an existing router `RequestContext`. Use this on handlers
mounted under [`auth`](/api/remix/auth-middleware/function/auth/) where the request may be either authenticated
([`GoodAuth`](/api/remix/auth-middleware/interface/GoodAuth/)) or unauthenticated ([`BadAuth`](/api/remix/auth-middleware/interface/BadAuth/)).

## Signature

```ts
type ContextWithAuth<context, identity> = ContextWithValues<
  context,
  [AuthContextEntry<AuthState<identity>>]
>;

```