---
title: MysqlDatabasePool
---

# MysqlDatabasePool

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table-mysql/src/lib/adapter.ts#L57" target="_blank">View Source</a>

## Summary

Mysql pool contract used by this adapter.

## Signature

```ts
type MysqlDatabasePool = {
  getConnection(): Promise<MysqlDatabaseConnection>;
  query(text: string, values: unknown[]): Promise<MysqlQueryResponse>;
};

```