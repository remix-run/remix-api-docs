---
title: "compileOrderByDirection"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/data-table/src/lib/sql-helpers.ts#L13"
---

# compileOrderByDirection

## Summary

Compiles a case-insensitive `orderBy` direction for use in a SQL statement.

## Signature

```ts
function compileOrderByDirection(direction: unknown): 'ASC' | 'DESC'

```

## Parameters

### `direction`

Runtime value to validate.

## Returns

The uppercase SQL direction keyword.