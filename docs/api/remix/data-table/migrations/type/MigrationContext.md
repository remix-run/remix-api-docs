---
title: MigrationContext
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/migrations.ts#L15
---

# MigrationContext

## Summary

Runtime context passed to migration `up`/`down` handlers.

## Signature

```ts
type MigrationContext = {
  db: Database;
  schema: MigrationSchema;
};

```