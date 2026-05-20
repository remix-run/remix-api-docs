---
title: TableBeforeWrite
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