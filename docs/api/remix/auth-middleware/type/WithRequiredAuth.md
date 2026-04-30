---
title: WithRequiredAuth
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/auth.ts#L59
---

# WithRequiredAuth

## Signature

```ts
type WithRequiredAuth<context, identity> = MergeContext<
  context,
  [readonly [typeof Auth, GoodAuth<identity>]]
>;

```