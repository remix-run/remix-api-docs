---
title: MigrationStatusEntry
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/migrations.ts#L118
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