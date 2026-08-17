---
title: MigrationStatusEntry
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table/src/lib/migrations.ts#L62
---

# MigrationStatusEntry

## Summary

Status entry returned by database migration operations.

## Signature

```ts
type MigrationStatusEntry = {
  appliedAt?: Date
  batch?: number
  checksum?: string
  id: string
  name: string
  status: MigrationStatus
}

```