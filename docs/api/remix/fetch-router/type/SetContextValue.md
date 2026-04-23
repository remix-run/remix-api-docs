---
title: SetContextValue
---

# SetContextValue

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/fetch-router/src/lib/request-context.ts#L116" target="_blank">View Source</a>

## Summary

Replaces or adds the value type for a single context key in a RequestContext.

## Signature

```ts
type SetContextValue<context, key, value> = MergeContext<
  context,
  [readonly [key, value]]
>;

```