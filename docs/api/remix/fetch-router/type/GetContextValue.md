---
title: GetContextValue
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/fetch-router/src/lib/request-context.ts#L97
---

# GetContextValue

## Summary

Resolves the value type returned by `context.get(key)` for the given context and key.

## Signature

```ts
type GetContextValue<context, key> =
  context extends RequestContext<any, infer entries extends ContextEntries>
    ? ResolveContextEntryValue<entries, key, ContextValue<key>>
    : ContextValue<key>;

```