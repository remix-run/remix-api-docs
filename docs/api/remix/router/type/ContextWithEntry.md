---
title: ContextWithEntry
---

# ContextWithEntry

## Summary

Replaces or adds the value type for a single context entry in a [`RequestContext`](/api/remix/router/class/RequestContext/).
This is useful when deriving a context shape without a middleware tuple.

## Signature

```ts
type ContextWithEntry<context, entry> = ContextWithEntries<context, [entry]>;

```