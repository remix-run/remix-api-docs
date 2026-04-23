---
title: CreateRowOptions
---

# CreateRowOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/database.ts#L301" target="_blank">View Source</a>

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