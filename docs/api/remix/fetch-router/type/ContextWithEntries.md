---
title: ContextWithEntries
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L153
---

# ContextWithEntries

## Summary

Appends context entries to an existing [`RequestContext`](/api/remix/fetch-router/class/RequestContext/).
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