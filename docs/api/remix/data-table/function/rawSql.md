---
title: rawSql
---

# rawSql

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/sql.ts#L82" target="_blank">View Source</a>

## Summary

Creates a SQL statement from raw text and values.

## Signature

```ts
function rawSql(text: string, values: unknown[]): SqlStatement;

```

## Example

```ts
import { rawSql } from 'remix/data-table'

let statement = rawSql('select * from users where id = ?', [1])
```

## Params

### text

SQL text containing placeholders expected by the target adapter.

### values

Placeholder values.

## Returns

A normalized SQL statement.