---
title: getTableValidator
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/data-table/src/lib/table.ts#L410
---

# getTableValidator

## Summary

Returns a table's optional write validator.

## Signature

```ts
function getTableValidator<table extends AnyTable>(
  table: table,
):
  | TableValidate<{
      [key in string]: {
        [column in string]: ColumnOutput<TableColumns<table>[column]>;
      }[key];
    }>
  | undefined;

```

## Returns

Validation function or `undefined`.