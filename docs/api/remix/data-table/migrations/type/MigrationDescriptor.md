---
title: MigrationDescriptor
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/migrations.ts#L86
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