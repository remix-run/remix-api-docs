---
title: PostgresTransactionClient
---

# PostgresTransactionClient

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table-postgres/src/lib/adapter.ts#L35" target="_blank">View Source</a>

## Summary

Postgres transaction client with optional connection release support.

## Signature

```ts
type PostgresTransactionClient = Pretty<
  PostgresDatabaseClient & { release?: () => void }
>;

```