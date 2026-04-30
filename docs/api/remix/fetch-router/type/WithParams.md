---
title: WithParams
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/fetch-router/src/lib/request-context.ts#L73
---

# WithParams

## Summary

Replaces the params type of a RequestContext while preserving its existing context entries.

## Signature

```ts
type WithParams<context, params> =
  context extends RequestContext<any, infer entries extends ContextEntries>
    ? MergeContextParams<ContextParams<context>, params> extends infer merged
      ? [merged] extends [never]
        ? never
        : RequestContext<Extract<merged, Record<string, any>>, entries>
      : never
    : RequestContext<params>;

```