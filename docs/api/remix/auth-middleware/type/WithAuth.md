---
title: WithAuth
source: https://github.com/remix-run/remix/blob/main/packages/auth-middleware/src/lib/auth.ts#L54
---

# WithAuth

## Signature

```ts
type WithAuth<context, identity> = MergeContext<
  context,
  [readonly [typeof Auth, AuthState<identity>]]
>;

```