---
title: TableBeforeWrite
---

# TableBeforeWrite

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/table.ts#L91" target="_blank">View Source</a>

## Summary

Hook invoked before a row write executes.

## Signature

```ts
type TableBeforeWrite<row> = (
  context: TableBeforeWriteContext<row>,
) => TableBeforeWriteResult<row>;

```