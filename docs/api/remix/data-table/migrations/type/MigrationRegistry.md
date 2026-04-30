---
title: MigrationRegistry
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L305
---

# MigrationRegistry

## Summary

Runtime-agnostic migration registry abstraction.

## Signature

```ts
type MigrationRegistry = {
  list(): MigrationDescriptor[];
  register(migration: MigrationDescriptor): void;
};

```