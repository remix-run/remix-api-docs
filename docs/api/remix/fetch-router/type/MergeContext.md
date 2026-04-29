---
title: MergeContext
---

# MergeContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/request-context.ts#L105" target="_blank">View Source</a>

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