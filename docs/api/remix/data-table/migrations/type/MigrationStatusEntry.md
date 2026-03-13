---
title: MigrationStatusEntry
---

# MigrationStatusEntry

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/migrations.ts#L123" target="_blank">View Source</a>

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