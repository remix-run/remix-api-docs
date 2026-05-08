---
title: ContextWithValues
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L117
---

# ContextWithValues

## Summary

Appends context values to an existing [`RequestContext`](/api/remix/fetch-router/class/RequestContext/).

Third-party middleware packages that add multiple values should expose their own
`ContextWith*` helper built on this type.

## Signature

```ts
type ContextWithValues<context, additions> =
  context extends RequestContext<
    infer params extends Record<string, any>,
    infer entries extends ContextEntries
  >
    ? RequestContext<params, [...entries, ...additions]>
    : never;

```