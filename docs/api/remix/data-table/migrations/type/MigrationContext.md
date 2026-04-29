---
title: MigrationContext
---

# MigrationContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/migrations.ts#L15" target="_blank">View Source</a>

## Summary

Runtime context passed to migration `up`/`down` handlers.

## Signature

```ts
type MigrationContext = {
  db: Database;
  schema: MigrationSchema;
};

```