---
title: TableAfterReadContext
---

# TableAfterReadContext

## Summary

Context passed to the `afterRead` hook.

## Signature

```ts
type TableAfterReadContext<row> = {
  tableName: string;
  value: Partial<row>;
};

```