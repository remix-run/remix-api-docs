---
title: MigrationJournalRow
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/migrations.ts#L102
---

# MigrationJournalRow

## Summary

Row shape persisted in the migration journal table.

## Signature

```ts
type MigrationJournalRow = {
  appliedAt: Date;
  batch: number;
  checksum: string;
  id: string;
  name: string;
};

```