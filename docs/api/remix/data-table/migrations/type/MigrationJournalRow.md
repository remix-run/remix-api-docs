---
title: MigrationJournalRow
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