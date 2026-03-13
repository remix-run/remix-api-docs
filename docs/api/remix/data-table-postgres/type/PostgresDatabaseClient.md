---
title: PostgresDatabaseClient
---

# PostgresDatabaseClient

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table-postgres/src/lib/adapter.ts#L40" target="_blank">View Source</a>

## Summary

Minimal postgres client contract used by this adapter.

## Signature

```ts
type PostgresDatabaseClient = {
  query(text: string, values: unknown[]): Promise<PostgresQueryResult>;
};

```