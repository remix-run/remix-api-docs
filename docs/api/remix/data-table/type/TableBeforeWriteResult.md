---
title: TableBeforeWriteResult
---

# TableBeforeWriteResult

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L84" target="_blank">View Source</a>

## Summary

Result returned from the `beforeWrite` hook.

## Signature

```ts
type TableBeforeWriteResult<row> = { value: Partial<row> } | ValidationFailure;

```