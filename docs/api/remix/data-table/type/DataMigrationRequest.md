---
title: DataMigrationRequest
---

# DataMigrationRequest

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L579" target="_blank">View Source</a>

## Summary

Adapter migration request payload.

## Signature

```ts
type DataMigrationRequest = {
  operation: DataMigrationOperation;
  transaction?: TransactionToken;
};

```