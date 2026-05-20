---
title: sql
---

# sql

## Summary

Tagged-template helper for building parameterized SQL statements.

## Signature

```ts
function sql(strings: TemplateStringsArray, values: unknown[]): SqlStatement;

```

## Example

```ts
import { sql } from "remix/data-table";

let email = "user@example.com";
let statement = sql`select * from users where email = ${email}`;
// => { text: 'select * from users where email = ?', values: ['user@example.com'] }

```

## Parameters

### `strings`

Template string parts.

### `values`

Interpolated values or nested [`SqlStatement`](/api/remix/data-table/type/SqlStatement/) values.

## Returns

A normalized [`SqlStatement`](/api/remix/data-table/type/SqlStatement/).