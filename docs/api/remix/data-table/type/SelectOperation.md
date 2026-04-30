---
title: SelectOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L36
---

# SelectOperation

## Summary

Canonical select statement shape consumed by adapters.

## Signature

```ts
type SelectOperation<table> = {
  distinct: boolean;
  groupBy: string[];
  having: Predicate[];
  joins: JoinClause[];
  kind: "select";
  limit?: number;
  offset?: number;
  orderBy: OrderByClause[];
  select: "*" | SelectColumn[];
  table: table;
  where: Predicate[];
};

```