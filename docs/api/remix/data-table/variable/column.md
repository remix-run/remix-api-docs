---
title: column
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/data-table/src/lib/column.ts#L346
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