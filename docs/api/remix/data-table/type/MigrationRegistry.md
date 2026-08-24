---
title: MigrationRegistry
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/migrations.ts#L110
---

# MigrationRegistry

## Summary

Runtime-agnostic migration registry abstraction.

## Signature

```ts
type MigrationRegistry = {
  list(): MigrationDescriptor[]
  register(migration: MigrationDescriptor): void
}

```