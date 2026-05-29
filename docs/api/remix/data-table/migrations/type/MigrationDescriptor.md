---
title: MigrationDescriptor
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/data-table/src/lib/migrations.ts#L13
---

# MigrationDescriptor

## Summary

Migration metadata + SQL consumed by the registry/runner.

## Signature

```ts
type MigrationDescriptor = {
  down?: string;
  id: string;
  name: string;
  path?: string;
  transaction?: MigrationTransactionMode;
  up: string;
};

```