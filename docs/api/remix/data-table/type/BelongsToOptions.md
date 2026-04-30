---
title: BelongsToOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L558
---

# BelongsToOptions

## Summary

Options for defining a belongsTo relation.

## Signature

```ts
type BelongsToOptions<source, target> = {
  foreignKey?: KeySelector<source>;
  targetKey?: KeySelector<target>;
};

```