---
title: MigrationTransactionMode
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