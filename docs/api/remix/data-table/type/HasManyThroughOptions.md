---
title: HasManyThroughOptions
---

# HasManyThroughOptions

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L566" target="_blank">View Source</a>

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