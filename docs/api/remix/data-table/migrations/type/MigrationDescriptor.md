---
title: MigrationDescriptor
---

# MigrationDescriptor

## Summary

Migration metadata + SQL consumed by the registry/runner.

## Signature

```ts
type MigrationDescriptor = {
  down?: string;
  id: string;
  name: string;
  path?: string;
  transaction?: MigrationTransactionMode;
  up: string;
};

```