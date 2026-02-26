---
title: MysqlDatabaseConnection
---

# MysqlDatabaseConnection

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table-mysql/src/lib/adapter.ts#L34" target="_blank">View Source</a>

## Summary

Single mysql connection contract used by this adapter.

## Signature

```ts
type MysqlDatabaseConnection = {
  release?: () => void;
  beginTransaction(): Promise<void>;
  commit(): Promise<void>;
  query(text: string, values: unknown[]): Promise<MysqlQueryResponse>;
  rollback(): Promise<void>;
};

```