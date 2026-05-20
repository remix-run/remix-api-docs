---
title: quoteTableRef
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

## Parameters

### `table`

Table reference to quote.

### `quoteIdentifier`

Dialect-specific identifier quote function.

## Returns

Quoted table reference.