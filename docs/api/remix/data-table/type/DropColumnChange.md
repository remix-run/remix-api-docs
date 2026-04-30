---
title: DropColumnChange
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L345
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