---
title: MigrationDescriptor
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L15
---

# MigrationDescriptor

## Summary

Migration metadata and SQL consumed by `Database.migrate()`.

## Signature

```ts
type MigrationDescriptor = {
  down?: string
  id: string
  name: string
  path?: string
  transaction?: MigrationTransactionMode
  up: string
}

```