---
title: sql
---

# sql

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/sql.ts#L15" target="_blank">View Source</a>

## Summary

Tagged-template helper for building parameterized SQL statements.

## Signature

```ts
function sql(strings: TemplateStringsArray, values: unknown[]): SqlStatement;

```

## Params

### strings

Template string parts.

### values

Interpolated values or nested `SqlStatement` values.

## Returns

A normalized SQL statement.