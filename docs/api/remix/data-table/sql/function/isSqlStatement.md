---
title: isSqlStatement
---

# isSqlStatement

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/sql.ts#L60" target="_blank">View Source</a>

## Summary

Returns `true` when a value matches the SqlStatement shape.

## Signature

```ts
function isSqlStatement(value: unknown): value is SqlStatement;

```

## Params

### value

Value to inspect.

## Returns

Whether the value is a [`SqlStatement`](/api/remix/data-table/type/SqlStatement) object.