---
title: HasManyThroughOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L566
---

# HasManyThroughOptions

## Summary

Options for defining a hasManyThrough relation.

## Signature

```ts
type HasManyThroughOptions<source, target> = {
  through: Relation<source, AnyTable, RelationCardinality, any>;
  throughForeignKey?: KeySelector<target>;
  throughTargetKey?: string | string[];
};

```