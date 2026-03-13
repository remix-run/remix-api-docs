---
title: CreateRowOptions
---

# CreateRowOptions

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L368" target="_blank">View Source</a>

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