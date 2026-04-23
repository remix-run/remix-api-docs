---
title: TableAfterReadResult
---

# TableAfterReadResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/table.ts#L165" target="_blank">View Source</a>

## Summary

Result returned from the `afterRead` hook.

## Signature

```ts
type TableAfterReadResult<row> = { value: Partial<row> } | ValidationFailure;

```