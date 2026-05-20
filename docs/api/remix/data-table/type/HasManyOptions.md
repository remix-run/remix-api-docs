---
title: HasManyOptions
---

# HasManyOptions

## Summary

Options for defining a [`hasMany`](/api/remix/data-table/function/hasMany/) relation.

## Signature

```ts
type HasManyOptions<source, target> = {
  foreignKey?: KeySelector<target>;
  targetKey?: KeySelector<source>;
};

```