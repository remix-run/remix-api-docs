---
title: AdapterStatement
---

# AdapterStatement

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/adapter.ts#L138" target="_blank">View Source</a>

## Summary

Union of all canonical statement shapes.

## Signature

```ts
type AdapterStatement =
  | SelectStatement
  | CountStatement
  | ExistsStatement
  | InsertStatement
  | InsertManyStatement
  | UpdateStatement
  | DeleteStatement
  | UpsertStatement
  | RawStatement;

```