---
title: WithRequiredAuth
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/auth.ts#L59
---

# WithRequiredAuth

## Signature

```ts
type WithRequiredAuth<context, identity> = MergeContext<
  context,
  [readonly [typeof Auth, GoodAuth<identity>]]
>;

```