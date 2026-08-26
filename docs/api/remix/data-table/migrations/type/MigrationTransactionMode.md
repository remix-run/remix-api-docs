---
title: MigrationTransactionMode
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L10
---

# MigrationTransactionMode

## Summary

Controls how each migration is wrapped in transactions.

- `auto` (default): wrap when the database supports transactional DDL.
- `required`: wrap; throws when the database does not support transactional DDL.
- `none`: never wrap.

## Signature

```ts
type MigrationTransactionMode = 'auto' | 'required' | 'none'

```