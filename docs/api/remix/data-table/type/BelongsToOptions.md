---
title: BelongsToOptions
---

# BelongsToOptions

## Summary

Options for defining a [`belongsTo`](/api/remix/data-table/function/belongsTo/) relation.

## Signature

```ts
type BelongsToOptions<source, target> = {
  foreignKey?: KeySelector<source>;
  targetKey?: KeySelector<target>;
};

```