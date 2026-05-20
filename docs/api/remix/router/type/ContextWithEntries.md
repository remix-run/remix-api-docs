---
title: ContextWithEntries
---

# ContextWithEntries

## Summary

Appends context entries to an existing [`RequestContext`](/api/remix/router/class/RequestContext/).
This is useful when deriving a context shape without a middleware tuple.

## Signature

```ts
type ContextWithEntries<context, additions> =
  context extends RequestContext<
    infer params extends Record<string, any>,
    infer entries extends ContextEntries
  >
    ? RequestContextWithEntries<params, [...entries, ...additions]>
    : never;

```