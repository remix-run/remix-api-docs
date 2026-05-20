---
title: MigrationTransactionMode
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/data-table/src/lib/migrations.ts#L8
---

# MigrationTransactionMode

## Summary

Controls how each migration is wrapped in transactions.

- `auto` (default): wrap when the adapter supports transactional DDL.
- `required`: wrap; throws when the adapter does not support transactional DDL.
- `none`: never wrap.

## Signature

```ts
type MigrationTransactionMode = "auto" | "required" | "none";

```