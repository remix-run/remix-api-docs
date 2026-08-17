---
title: TransactionToken
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table/src/lib/driver.ts#L247
---

# TransactionToken

## Summary

Opaque transaction handle supplied by database drivers.

## Signature

```ts
type TransactionToken = {
  id: string
  metadata?: Record<string, unknown>
}

```