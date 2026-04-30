---
title: WithAuth
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/auth-middleware/src/lib/auth.ts#L54
---

# WithAuth

## Signature

```ts
type WithAuth<context, identity> = MergeContext<
  context,
  [readonly [typeof Auth, AuthState<identity>]]
>;

```