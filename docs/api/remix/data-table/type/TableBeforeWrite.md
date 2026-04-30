---
title: TableBeforeWrite
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L91
---

# TableBeforeWrite

## Summary

Hook invoked before a row write executes.

## Signature

```ts
type TableBeforeWrite<row> = (
  context: TableBeforeWriteContext<row>,
) => TableBeforeWriteResult<row>;

```