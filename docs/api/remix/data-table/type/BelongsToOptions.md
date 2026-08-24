---
title: BelongsToOptions
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/table.ts#L558
---

# BelongsToOptions

## Summary

Options for defining a [`belongsTo`](/api/remix/data-table/function/belongsTo/) relation.

## Signature

```ts
type BelongsToOptions<source, target> = {
  foreignKey?: KeySelector<source>
  targetKey?: KeySelector<target>
}

```