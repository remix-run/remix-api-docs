---
title: ExistsOperation
---

# ExistsOperation

## Summary

Canonical exists statement shape consumed by adapters.

## Signature

```ts
type ExistsOperation<table> = {
  groupBy: string[];
  having: Predicate[];
  joins: JoinClause[];
  kind: "exists";
  table: table;
  where: Predicate[];
};

```