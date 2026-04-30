---
title: TableAfterRead
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L172
---

# TableAfterRead

## Summary

Hook invoked after a row is read.

## Signature

```ts
type TableAfterRead<row> = (
  context: TableAfterReadContext<row>,
) => TableAfterReadResult<row>;

```