---
title: HasManyOptions
---

# HasManyOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L542" target="_blank">View Source</a>

## Summary

Options for defining a hasMany relation.

## Signature

```ts
type HasManyOptions<source, target> = {
  foreignKey?: KeySelector<target>;
  targetKey?: KeySelector<source>;
};

```