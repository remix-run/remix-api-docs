---
title: loadMigrations
---

# loadMigrations

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations-node.ts#L22" target="_blank">View Source</a>

## Summary

Loads migration modules from a directory on Node.js.

Filenames are used to infer migration `id` and `name`.
Each file must default-export `createMigration(...)`.

## Signature

```ts
function loadMigrations(directory: string): Promise<MigrationDescriptor[]>;

```

## Example

```ts
import { loadMigrations } from 'remix/data-table/migrations/node'

let migrations = await loadMigrations('./app/db/migrations')
```

## Params

### directory

Absolute or relative directory containing migration files.

## Returns

A sorted list of loaded migration descriptors.