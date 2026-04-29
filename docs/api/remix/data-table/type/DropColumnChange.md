---
title: DropColumnChange
---

# DropColumnChange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/adapter.ts#L345" target="_blank">View Source</a>

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