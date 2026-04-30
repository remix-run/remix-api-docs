---
title: HasManyOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L542
---

# HasManyOptions

## Summary

Options for defining a hasMany relation.

## Signature

```ts
type HasManyOptions<source, target> = {
  foreignKey?: KeySelector<target>;
  targetKey?: KeySelector<source>;
};

```