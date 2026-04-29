---
title: MigrationJournalRow
---

# MigrationJournalRow

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/migrations.ts#L102" target="_blank">View Source</a>

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