---
title: ContextWithRequiredAuth
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/auth.ts#L74
---

# ContextWithRequiredAuth

## Summary

Adds the [`Auth`](/api/remix/auth-middleware/variable/Auth/) context key — typed as a [`GoodAuth`](/api/remix/auth-middleware/interface/GoodAuth/) only —
onto an existing router `RequestContext`. Use this on handlers mounted
under [`requireAuth`](/api/remix/auth-middleware/function/requireAuth/) where the request is guaranteed to be
authenticated.

## Signature

```ts
type ContextWithRequiredAuth<context, identity> = ContextWithValues<
  context,
  [AuthContextEntry<GoodAuth<identity>>]
>;

```