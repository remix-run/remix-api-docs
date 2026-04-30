---
title: TransactionOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L563
---

# TransactionOptions

## Summary

Transaction hints that adapters may apply when supported by the dialect.

## Signature

```ts
type TransactionOptions = {
  isolationLevel?:
    | "read uncommitted"
    | "read committed"
    | "repeatable read"
    | "serializable";
  readOnly?: boolean;
};

```