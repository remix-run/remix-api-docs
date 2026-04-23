---
title: Migration
---

# Migration

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/migrations.ts#L38" target="_blank">View Source</a>

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