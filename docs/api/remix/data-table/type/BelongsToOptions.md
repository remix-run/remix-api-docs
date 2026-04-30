---
title: BelongsToOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L558
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