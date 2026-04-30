---
title: MergeContext
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L105
---

# MergeContext

## Summary

Appends context entries to an existing RequestContext.

## Signature

```ts
type MergeContext<context, additions> =
  context extends RequestContext<
    infer params extends Record<string, any>,
    infer entries extends ContextEntries
  >
    ? RequestContext<params, [...entries, ...additions]>
    : never;

```