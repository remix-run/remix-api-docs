---
title: AdapterCapabilities
---

# AdapterCapabilities

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L606" target="_blank">View Source</a>

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