---
title: TableAfterDeleteContext
---

# TableAfterDeleteContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L137" target="_blank">View Source</a>

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