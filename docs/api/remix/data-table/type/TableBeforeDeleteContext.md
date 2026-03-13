---
title: TableBeforeDeleteContext
---

# TableBeforeDeleteContext

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L116" target="_blank">View Source</a>

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