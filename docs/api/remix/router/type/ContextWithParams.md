---
title: ContextWithParams
---

# ContextWithParams

## Summary

Adds route params to a [`RequestContext`](/api/remix/router/class/RequestContext/) while preserving its existing context values.

## Signature

```ts
type ContextWithParams<context, params> =
  context extends RequestContext<any, infer entries extends ContextEntries>
    ? MergeContextParams<ContextParams<context>, params> extends infer merged
      ? [merged] extends [never]
        ? never
        : RequestContextWithEntries<
            Extract<merged, Record<string, any>>,
            entries
          >
      : never
    : RequestContextWithEntries<params, []>;

```