---
title: GetContextValue
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L106
---

# GetContextValue

## Summary

Resolves the value type returned by `context.get(key)` for the given context and key.

## Signature

```ts
type GetContextValue<context, key> =
  context extends RequestContext<any, infer entries extends ContextEntries>
    ? ResolveContextEntryValue<entries, key, ContextFallbackValue<key>>
    : ContextFallbackValue<key>;

```