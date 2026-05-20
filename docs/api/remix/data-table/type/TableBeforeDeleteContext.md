---
title: TableBeforeDeleteContext
---

# TableBeforeDeleteContext

## Summary

Context passed to the `beforeDelete` hook.

## Signature

```ts
type TableBeforeDeleteContext = {
  limit?: number;
  offset?: number;
  orderBy: ReadonlyArray<OrderByClause>;
  tableName: string;
  where: ReadonlyArray<Predicate<string>>;
};

```