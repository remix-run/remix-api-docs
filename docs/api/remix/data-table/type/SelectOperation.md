---
title: SelectOperation
---

# SelectOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/adapter.ts#L36" target="_blank">View Source</a>

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