---
title: ExistsOperation
---

# ExistsOperation

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L65" target="_blank">View Source</a>

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