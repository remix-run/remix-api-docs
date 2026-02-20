---
title: TransactionOptions
---

# TransactionOptions

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/adapter.ts#L160" target="_blank">View Source</a>

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