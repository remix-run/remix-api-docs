---
title: AdapterCapabilities
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