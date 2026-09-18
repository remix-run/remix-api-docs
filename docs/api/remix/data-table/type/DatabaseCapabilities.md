---
title: DatabaseCapabilities
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/data-table/src/lib/driver.ts#L280
---

# DatabaseCapabilities

## Summary

Declares database feature support.

## Signature

```ts
type DatabaseCapabilities = {
  migrationLock: boolean
  returning: boolean
  savepoints: boolean
  transactionalDdl: boolean
  upsert: boolean
}

```