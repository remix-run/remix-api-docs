---
title: PostgresDatabasePool
---

# PostgresDatabasePool

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table-postgres/src/lib/adapter.ts#L44" target="_blank">View Source</a>

## Summary

Postgres pool-like client contract used by this adapter.

## Signature

```ts
type PostgresDatabasePool = Pretty<
  PostgresDatabaseClient & {
    connect?: () => Promise<PostgresTransactionClient>;
  }
>;

```