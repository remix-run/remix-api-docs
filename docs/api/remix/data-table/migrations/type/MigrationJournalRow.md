---
title: MigrationJournalRow
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/migrations.ts#L41
---

# MigrationJournalRow

## Summary

Row shape persisted in the migration journal table.

## Signature

```ts
type MigrationJournalRow = {
  appliedAt: Date
  batch: number
  checksum: string
  id: string
  name: string
}

```