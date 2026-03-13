---
title: quoteLiteral
---

# quoteLiteral

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/sql-helpers.ts#L119" target="_blank">View Source</a>

## Summary

Converts a JavaScript value into a SQL literal string.

## Signature

```ts
function quoteLiteral(
  value: unknown,
  options: { booleansAsIntegers?: boolean },
): string;

```

## Params

### value

Value to serialize.

### options

Serialization options.

## Returns

SQL literal text.