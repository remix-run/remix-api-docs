---
title: SetContextValue
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L116
---

# SetContextValue

## Summary

Replaces or adds the value type for a single context key in a RequestContext.

## Signature

```ts
type SetContextValue<context, key, value> = MergeContext<
  context,
  [readonly [key, value]]
>;

```