---
title: GetContextValue
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