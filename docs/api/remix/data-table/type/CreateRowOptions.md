---
title: CreateRowOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L301
---

# CreateRowOptions

## Summary

Options for create operations that return the inserted row.

## Signature

```ts
type CreateRowOptions<table, relations> = {
  returnRow: true;
  touch?: boolean;
  with?: relations;
};

```