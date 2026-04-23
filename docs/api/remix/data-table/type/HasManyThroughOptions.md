---
title: HasManyThroughOptions
---

# HasManyThroughOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/table.ts#L566" target="_blank">View Source</a>

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