---
title: MigrationStatusEntry
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L118
---

# MigrationStatusEntry

## Summary

Status row returned by `runner.status()` and `runner.up/down(...)`.

## Signature

```ts
type MigrationStatusEntry = {
  appliedAt?: Date;
  batch?: number;
  checksum?: string;
  id: string;
  name: string;
  status: MigrationStatus;
};

```