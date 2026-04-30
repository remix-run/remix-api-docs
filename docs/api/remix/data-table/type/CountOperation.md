---
title: CountOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L53
---

# CountOperation

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