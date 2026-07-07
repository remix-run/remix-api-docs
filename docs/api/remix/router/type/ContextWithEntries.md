---
title: ContextWithEntries
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L171
---

# ContextWithEntries

## Summary

Appends context entries to an existing [`RequestContext`](/api/remix/router/class/RequestContext/).
This is useful when deriving a context shape without a middleware tuple.

## Signature

```ts
type ContextWithEntries<context, additions> =
  context extends RequestContextTypes<any, any>
    ? RequestContextWithEntries<
        ContextParams<context>,
        [...RequestContextEntries<context>, ...additions]
      >
    : never;

```