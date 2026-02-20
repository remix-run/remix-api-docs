---
title: MysqlDatabasePool
---

# MysqlDatabasePool

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table-mysql/src/lib/adapter.ts#L45" target="_blank">View Source</a>

## Summary

Mysql pool contract used by this adapter.

## Signature

```ts
type MysqlDatabasePool = {
  getConnection(): Promise<MysqlDatabaseConnection>;
  query(text: string, values: unknown[]): Promise<MysqlQueryResponse>;
};

```