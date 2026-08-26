---
title: loadMigrations
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations-node.ts#L24
---

# loadMigrations

## Summary

Loads SQL-file migrations from a directory on Node.js.

Each migration is a directory named `YYYYMMDDHHmmss_<slug>` containing:
- `up.sql` (required)
- `down.sql` (optional; omit for irreversible migrations)

`id` and `name` are inferred from the directory name.

## Signature

```ts
function loadMigrations(directory: string): Promise<MigrationDescriptor[]>

```

## Example

```ts
import { loadMigrations } from 'remix/data-table/migrations/node'

let migrations = await loadMigrations('./app/db/migrations')

```

## Parameters

### `directory`

Absolute or relative directory containing migration directories.

## Returns

A sorted list of loaded migration descriptors.