---
title: MigrationDescriptor
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L86
---

# MigrationDescriptor

## Summary

Migration metadata stored in registries and returned by loaders.

## Signature

```ts
type MigrationDescriptor = {
  checksum?: string;
  id: string;
  migration: Migration;
  name: string;
  path?: string;
};

```