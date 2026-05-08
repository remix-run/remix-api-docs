---
title: AdapterCapabilities
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L606
---

# AdapterCapabilities

## Summary

Declares adapter feature support.

## Signature

```ts
type AdapterCapabilities = {
  migrationLock: boolean;
  returning: boolean;
  savepoints: boolean;
  transactionalDdl: boolean;
  upsert: boolean;
};

```