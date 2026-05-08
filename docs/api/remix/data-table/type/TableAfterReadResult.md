---
title: TableAfterReadResult
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L165
---

# TableAfterReadResult

## Summary

Result returned from the `afterRead` hook.

## Signature

```ts
type TableAfterReadResult<row> = { value: Partial<row> } | ValidationFailure;

```