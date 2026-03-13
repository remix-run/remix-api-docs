---
title: createMigrationRunner
---

# createMigrationRunner

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations/runner.ts#L317" target="_blank">View Source</a>

## Summary

Creates a migration runner for applying/reverting migrations against an adapter.

## Signature

```ts
function createMigrationRunner(
  adapter: DatabaseAdapter,
  migrations: MigrationDescriptor[] | MigrationRegistry,
  options: MigrationRunnerOptions,
): MigrationRunner;

```

## Example

```ts
import { createMigrationRunner } from 'remix/data-table/migrations'

let runner = createMigrationRunner(adapter, migrations, {
  journalTable: 'app_migrations',
})
await runner.up()
```

## Params

### adapter

Database adapter used to compile and execute migration operations.

### migrations

Migration descriptors or registry.

### options

Optional runner configuration.

## Returns

A migration runner instance.