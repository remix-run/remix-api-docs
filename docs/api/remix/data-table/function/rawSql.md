---
title: rawSql
---

# rawSql

## Summary

Creates a SQL statement from raw text and values.

## Signature

```ts
function rawSql(text: string, values: unknown[]): SqlStatement;

```

## Example

```ts
import { rawSql } from "remix/data-table";

let statement = rawSql("select * from users where id = ?", [1]);

```

## Parameters

### `text`

SQL text containing placeholders expected by the target adapter.

### `values`

Placeholder values.

## Returns

A normalized SQL statement.