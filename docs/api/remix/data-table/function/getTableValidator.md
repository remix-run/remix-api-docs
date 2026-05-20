---
title: getTableValidator
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