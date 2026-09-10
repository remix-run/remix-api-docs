---
title: TransactionOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/driver.ts#L255
---

# TransactionOptions

## Summary

Transaction hints that database drivers may apply when supported by the dialect.

## Signature

```ts
type TransactionOptions = {
  isolationLevel?: 'read uncommitted' | 'read committed' | 'repeatable read' | 'serializable'
  readOnly?: boolean
}

```