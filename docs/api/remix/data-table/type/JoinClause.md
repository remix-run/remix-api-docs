---
title: JoinClause
---

# JoinClause

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L14" target="_blank">View Source</a>

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