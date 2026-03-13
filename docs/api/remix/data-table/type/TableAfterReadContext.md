---
title: TableAfterReadContext
---

# TableAfterReadContext

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L154" target="_blank">View Source</a>

## Summary

Context passed to the `afterRead` hook.

## Signature

```ts
type TableAfterReadContext<row> = {
  tableName: string;
  value: Partial<row>;
};

```