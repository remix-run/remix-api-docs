---
title: Migration
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L38
---

# Migration

## Summary

Normalized migration object consumed by the registry/runner.

## Signature

```ts
type Migration = {
  down: CreateMigrationInput["down"];
  transaction: MigrationTransactionMode;
  up: CreateMigrationInput["up"];
};

```