---
title: CreateMigrationInput
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L29
---

# CreateMigrationInput

## Summary

Authoring shape for `createMigration(...)`.

## Signature

```ts
type CreateMigrationInput = {
  down: (context: MigrationContext) => Promise<void> | void;
  transaction?: MigrationTransactionMode;
  up: (context: MigrationContext) => Promise<void> | void;
};

```