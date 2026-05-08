---
title: DropCheckChange
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L410
---

# DropCheckChange

## Summary

Alter-table change that drops a check constraint.

## Signature

```ts
type DropCheckChange = {
  kind: "dropCheck";
  name: string;
};

```