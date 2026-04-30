---
title: TableBeforeDeleteContext
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L116
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