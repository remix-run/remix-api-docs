---
title: ExistsOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L65
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