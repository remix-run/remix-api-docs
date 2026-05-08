---
title: column
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/column.ts#L334
---

# column

## Summary

Chainable column builder namespace.

## Signature

```ts
const column: ColumnNamespace;

```

## Example

```ts
import { column as c } from "remix/data-table";

let email = c.varchar(255).notNull().unique("users_email_uq");

```