---
title: MigrationRegistry
---

# MigrationRegistry

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/migrations.ts#L310" target="_blank">View Source</a>

## Summary

Runtime-agnostic migration registry abstraction.

## Signature

```ts
type MigrationRegistry = {
  list(): MigrationDescriptor[];
  register(migration: MigrationDescriptor): void;
};

```