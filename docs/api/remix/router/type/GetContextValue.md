---
title: GetContextValue
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L138
---

# GetContextValue

## Summary

Resolves the value type returned by `context.get(key)` for the given context and key.

## Signature

```ts
type GetContextValue<context, key> =
  context extends RequestContextTypes<any, any>
    ? ResolveEntryValue<RequestContextEntries<context>, key, ContextFallbackValue<key>>
    : ContextFallbackValue<key>

```