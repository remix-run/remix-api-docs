---
title: WithRequiredAuth
---

# WithRequiredAuth

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth-middleware/src/lib/auth.ts#L59" target="_blank">View Source</a>

## Signature

```ts
type WithRequiredAuth<context, identity> = MergeContext<
  context,
  [readonly [typeof Auth, GoodAuth<identity>]]
>;

```