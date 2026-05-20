---
title: TableAfterWrite
---

# TableAfterWrite

## Summary

Hook invoked after a row write completes.

## Signature

```ts
type TableAfterWrite<row> = (context: TableAfterWriteContext<row>) => void;

```