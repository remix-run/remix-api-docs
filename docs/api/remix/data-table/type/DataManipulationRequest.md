---
title: DataManipulationRequest
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/data-table/src/lib/driver.ts#L263
---

# DataManipulationRequest

## Summary

Database driver execution request payload.

## Signature

```ts
type DataManipulationRequest = {
  operation: DataManipulationOperation
  transaction?: TransactionToken
}

```