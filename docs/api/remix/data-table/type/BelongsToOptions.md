---
title: BelongsToOptions
---

# BelongsToOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/table.ts#L558" target="_blank">View Source</a>

## Summary

Options for defining a belongsTo relation.

## Signature

```ts
type BelongsToOptions<source, target> = {
  foreignKey?: KeySelector<source>;
  targetKey?: KeySelector<target>;
};

```