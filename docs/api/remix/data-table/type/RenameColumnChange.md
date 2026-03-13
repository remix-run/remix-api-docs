---
title: RenameColumnChange
---

# RenameColumnChange

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L336" target="_blank">View Source</a>

## Summary

Alter-table change that renames a column.

## Signature

```ts
type RenameColumnChange = {
  from: string;
  kind: "renameColumn";
  to: string;
};

```