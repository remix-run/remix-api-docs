---
title: quoteTableRef
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/sql-helpers.ts#L104
---

# quoteTableRef

## Summary

Quotes a `{ schema?, name }` table reference using a dialect quote function.

## Signature

```ts
function quoteTableRef(
  table: TableRef,
  quoteIdentifier: QuoteIdentifier,
): string;

```

## Params

### `table`

Table reference to quote.

### `quoteIdentifier`

Dialect-specific identifier quote function.

## Returns

Quoted table reference.