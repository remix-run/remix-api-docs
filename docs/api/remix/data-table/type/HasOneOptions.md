---
title: HasOneOptions
---

# HasOneOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/table.ts#L550" target="_blank">View Source</a>

## Summary

Options for defining a hasOne relation.

## Signature

```ts
type HasOneOptions<source, target> = {
  foreignKey?: KeySelector<target>;
  targetKey?: KeySelector<source>;
};

```