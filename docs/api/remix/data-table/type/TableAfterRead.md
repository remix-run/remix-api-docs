---
title: TableAfterRead
---

# TableAfterRead

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L172" target="_blank">View Source</a>

## Summary

Hook invoked after a row is read.

## Signature

```ts
type TableAfterRead<row> = (
  context: TableAfterReadContext<row>,
) => TableAfterReadResult<row>;

```