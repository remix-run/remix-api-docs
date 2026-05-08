---
title: ContextWithValue
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L131
---

# ContextWithValue

## Summary

Replaces or adds the value type for a single context key in a [`RequestContext`](/api/remix/fetch-router/class/RequestContext/).

Third-party middleware packages that add one value should expose their own
`ContextWith*` helper built on this type.

## Signature

```ts
type ContextWithValue<context, key, value> = ContextWithValues<
  context,
  [readonly [key, value]]
>;

```