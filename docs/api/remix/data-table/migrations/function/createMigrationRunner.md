---
title: createMigrationRunner
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/data-table/src/lib/migrations/runner.ts#L275
---

# createMigrationRunner

## Summary

Creates a migration runner for applying/reverting SQL migrations against an adapter.

## Signature

```ts
function createMigrationRunner(
  adapter: DatabaseAdapter,
  migrations: MigrationRegistry | MigrationDescriptor[],
  options: MigrationRunnerOptions,
): MigrationRunner;

```

## Example

```ts
import { createMigrationRunner } from "remix/data-table/migrations";

let runner = createMigrationRunner(adapter, migrations, {
  journalTable: "app_migrations",
});
await runner.up();

```

## Parameters

### `adapter`

Database adapter used to execute migration scripts.

### `migrations`

Migration descriptors or registry.

### `options`

Optional runner configuration.

## Returns

A migration runner instance.