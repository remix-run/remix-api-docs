---
title: getTableValidator
---

# getTableValidator

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/table.ts#L410" target="_blank">View Source</a>

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

## Params

### table

## Returns

Validation function or `undefined`.