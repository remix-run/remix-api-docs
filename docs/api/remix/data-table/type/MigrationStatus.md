---
title: MigrationStatus
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/data-table/src/lib/migrations.ts#L57
---

# MigrationStatus

## Summary

Effective migration status.

- `applied`: the current migration matches its journal entry.
- `pending`: the current migration has not been applied.
- `drifted`: the current migration differs from its journal entry.
- `missing`: an applied journal entry has no migration in the current set.

## Signature

```ts
type MigrationStatus = 'applied' | 'pending' | 'drifted' | 'missing'

```