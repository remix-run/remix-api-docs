---
title: MigrationStatusEntry
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