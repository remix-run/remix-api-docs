---
title: CountOperation
---

# CountOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L53" target="_blank">View Source</a>

## Summary

Canonical count statement shape consumed by adapters.

## Signature

```ts
type CountOperation<table> = {
  groupBy: string[];
  having: Predicate[];
  joins: JoinClause[];
  kind: "count";
  table: table;
  where: Predicate[];
};

```