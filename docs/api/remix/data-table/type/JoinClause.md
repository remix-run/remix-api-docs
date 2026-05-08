---
title: JoinClause
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L14
---

# JoinClause

## Summary

Join configuration used in compiled select statements.

## Signature

```ts
type JoinClause = {
  on: Predicate;
  table: AnyTable;
  type: JoinType;
};

```