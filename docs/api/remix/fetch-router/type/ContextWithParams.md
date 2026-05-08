---
title: ContextWithParams
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L82
---

# ContextWithParams

## Summary

Adds route params to a [`RequestContext`](/api/remix/fetch-router/class/RequestContext/) while preserving its existing context values.

## Signature

```ts
type ContextWithParams<context, params> =
  context extends RequestContext<any, infer entries extends ContextEntries>
    ? MergeContextParams<ContextParams<context>, params> extends infer merged
      ? [merged] extends [never]
        ? never
        : RequestContext<Extract<merged, Record<string, any>>, entries>
      : never
    : RequestContext<params>;

```