---
title: rawSql
---

# rawSql

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/sql.ts#L65" target="_blank">View Source</a>

## Summary

Creates a SQL statement from raw text and values.

## Signature

```ts
function rawSql(text: string, values: unknown[]): SqlStatement;

```

## Params

### text

SQL text containing `?` placeholders.

### values

Placeholder values.

## Returns

A normalized SQL statement.