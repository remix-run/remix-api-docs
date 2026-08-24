---
title: HasOneOptions
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/table.ts#L550
---

# HasOneOptions

## Summary

Options for defining a [`hasOne`](/api/remix/data-table/function/hasOne/) relation.

## Signature

```ts
type HasOneOptions<source, target> = {
  foreignKey?: KeySelector<target>
  targetKey?: KeySelector<source>
}

```