---
title: "loadMigrations"
source: "https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations-node.ts#L26"
---

# loadMigrations

## Summary

Loads SQL-file migrations from a directory on Node.js.

Each migration is a directory named `<digits>_<slug>` containing:
- `up.sql` (required)
- `down.sql` (optional; omit for irreversible migrations)

`id` and `name` are inferred from the directory name. Ids must contain 1 to 64 digits,
for example `0001` or `20260228090000` (`YYYYMMDDHHmmss`). All ids in the directory must
be unique and have the same number of digits so migrations sort in numeric order.

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