---
title: ContextWithEntry
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/fetch-router/src/lib/request-context.ts#L165
---

# ContextWithEntry

## Summary

Replaces or adds the value type for a single context entry in a [`RequestContext`](/api/remix/router/class/RequestContext/).
This is useful when deriving a context shape without a middleware tuple.

## Signature

```ts
type ContextWithEntry<context, entry> = ContextWithEntries<context, [entry]>;

```