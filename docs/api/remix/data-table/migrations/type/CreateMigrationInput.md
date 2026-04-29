---
title: CreateMigrationInput
---

# CreateMigrationInput

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/migrations.ts#L29" target="_blank">View Source</a>

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