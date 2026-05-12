---
title: GetContextValue
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L120
---

# GetContextValue

## Summary

Resolves the value type returned by `context.get(key)` for the given context and key.

## Signature

```ts
type GetContextValue<context, key> =
  context extends RequestContext<any, infer entries extends ContextEntries>
    ? ResolveEntryValue<entries, key, ContextFallbackValue<key>>
    : ContextFallbackValue<key>;

```