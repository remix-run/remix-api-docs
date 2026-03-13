---
title: TableBeforeWriteResult
---

# TableBeforeWriteResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L84" target="_blank">View Source</a>

## Summary

Result returned from the `beforeWrite` hook.

## Signature

```ts
type TableBeforeWriteResult<row> = { value: Partial<row> } | ValidationFailure;

```