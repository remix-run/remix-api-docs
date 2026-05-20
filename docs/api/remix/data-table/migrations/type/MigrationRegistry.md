---
title: MigrationRegistry
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