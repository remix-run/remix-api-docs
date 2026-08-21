---
title: loadSeed
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations-node.ts#L101
---

# loadSeed

## Summary

Loads a SQL seed file on Node.js.

The file may contain multiple SQL statements. Seeds that must be safe to
run against an already-seeded database should use idempotent statements
(for example, `insert or ignore` on SQLite).

## Signature

```ts
function loadSeed(filename: string): Promise<Seed>

```

## Example

```ts
import { loadSeed } from 'remix/data-table/migrations/node'

let seed = await loadSeed('./app/data/seed.sql')
await db.reset({ migrations, seed })

```

## Parameters

### `filename`

Absolute or relative path to a SQL seed file.

## Returns

A seed function that executes the file's SQL script.