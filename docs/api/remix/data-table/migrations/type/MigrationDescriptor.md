---
title: MigrationDescriptor
---

# MigrationDescriptor

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L91" target="_blank">View Source</a>

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