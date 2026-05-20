---
title: CountOperation
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