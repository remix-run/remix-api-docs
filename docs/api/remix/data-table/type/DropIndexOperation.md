---
title: DropIndexOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L482
---

# DropIndexOperation

## Summary

Operation that drops an index.

## Signature

```ts
type DropIndexOperation = {
  ifExists?: boolean;
  kind: "dropIndex";
  name: string;
  table: TableRef;
};

```