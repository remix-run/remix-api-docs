---
title: TransactionOptions
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