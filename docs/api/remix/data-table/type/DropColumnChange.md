---
title: DropColumnChange
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L345
---

# DropColumnChange

## Summary

Alter-table change that drops a column.

## Signature

```ts
type DropColumnChange = {
  column: string;
  ifExists?: boolean;
  kind: "dropColumn";
};

```