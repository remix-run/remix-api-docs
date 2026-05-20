---
title: TableAfterRead
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