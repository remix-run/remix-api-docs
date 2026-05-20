---
title: HasOneOptions
---

# HasOneOptions

## Summary

Options for defining a [`hasOne`](/api/remix/data-table/function/hasOne/) relation.

## Signature

```ts
type HasOneOptions<source, target> = {
  foreignKey?: KeySelector<target>;
  targetKey?: KeySelector<source>;
};

```