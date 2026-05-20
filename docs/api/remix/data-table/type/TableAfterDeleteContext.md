---
title: TableAfterDeleteContext
---

# TableAfterDeleteContext

## Summary

Context passed to the `afterDelete` hook.

## Signature

```ts
type TableAfterDeleteContext = {
  affectedRows: number;
  limit?: number;
  offset?: number;
  orderBy: ReadonlyArray<OrderByClause>;
  tableName: string;
  where: ReadonlyArray<Predicate<string>>;
};

```