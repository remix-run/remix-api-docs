---
title: JoinClause
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