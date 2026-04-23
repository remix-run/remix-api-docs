---
title: SqlStatement
---

# SqlStatement

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/sql.ts#L7" target="_blank">View Source</a>

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