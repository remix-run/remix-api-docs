---
title: HasManyOptions
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/table.ts#L542
---

# HasManyOptions

## Summary

Options for defining a [`hasMany`](/api/remix/data-table/function/hasMany/) relation.

## Signature

```ts
type HasManyOptions<source, target> = {
  foreignKey?: KeySelector<target>
  targetKey?: KeySelector<source>
}

```