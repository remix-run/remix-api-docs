---
title: quotePath
---

# quotePath

## Summary

Quotes each segment of a dotted identifier path.

Wildcard segments (`*`) are preserved.

## Signature

```ts
function quotePath(path: string, quoteIdentifier: QuoteIdentifier): string;

```

## Parameters

### `path`

Dotted path to quote.

### `quoteIdentifier`

Dialect-specific identifier quote function.

## Returns

Quoted path string.