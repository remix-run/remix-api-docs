---
title: ContextWithParams
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L115
---

# ContextWithParams

## Summary

Adds route params to a [`RequestContext`](/api/remix/router/class/RequestContext/) while preserving its existing context values.

## Signature

```ts
type ContextWithParams<context, params> =
  context extends RequestContextTypes<any, any>
    ? RequestContextWithEntries<
        MergeContextParams<ContextParams<context>, params>,
        RequestContextEntries<context>
      >
    : RequestContextWithEntries<params, []>;

```