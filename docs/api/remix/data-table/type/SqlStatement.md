---
title: SqlStatement
---

# SqlStatement

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table/src/lib/sql.ts#L4" target="_blank">View Source</a>

## Summary

Parameterized SQL payload with positional `?` placeholders.

## Signature

```ts
type SqlStatement = {
  text: string;
  values: unknown[];
};

```