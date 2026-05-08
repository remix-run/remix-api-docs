---
title: SqlStatement
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/sql.ts#L7
---

# SqlStatement

## Summary

Parameterized SQL payload.

The `text` may contain positional placeholders (`?`) or dialect-native
placeholders (for example `$1`, `$2`) depending on compiler stage.

## Signature

```ts
type SqlStatement = {
  text: string;
  values: unknown[];
};

```