---
title: GetContextValue
---

# GetContextValue

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/request-context.ts#L97" target="_blank">View Source</a>

## Summary

Resolves the value type returned by `context.get(key)` for the given context and key.

## Signature

```ts
type GetContextValue<context, key> =
  context extends RequestContext<any, infer entries extends ContextEntries>
    ? ResolveContextEntryValue<entries, key, ContextValue<key>>
    : ContextValue<key>;

```