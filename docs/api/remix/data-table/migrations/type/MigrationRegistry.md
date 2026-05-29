---
title: MigrationRegistry
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/data-table/src/lib/migrations.ts#L100
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