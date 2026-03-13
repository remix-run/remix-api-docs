---
title: MigrationJournalRow
---

# MigrationJournalRow

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L107" target="_blank">View Source</a>

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