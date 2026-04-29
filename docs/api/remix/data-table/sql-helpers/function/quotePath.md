---
title: quotePath
---

# quotePath

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/sql-helpers.ts#L81" target="_blank">View Source</a>

## Summary

Quotes each segment of a dotted identifier path.

Wildcard segments (`*`) are preserved.

## Signature

```ts
function quotePath(path: string, quoteIdentifier: QuoteIdentifier): string;

```

## Params

### path

Dotted path to quote.

### quoteIdentifier

Dialect-specific identifier quote function.

## Returns

Quoted path string.