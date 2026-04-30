---
title: CreateMigrationInput
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/migrations.ts#L29
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