---
title: HasManyThroughOptions
---

# HasManyThroughOptions

## Summary

Options for defining a [`hasManyThrough`](/api/remix/data-table/function/hasManyThrough/) relation.

## Signature

```ts
type HasManyThroughOptions<source, target> = {
  through: Relation<source, AnyTable, RelationCardinality, any>;
  throughForeignKey?: KeySelector<target>;
  throughTargetKey?: string | string[];
};

```