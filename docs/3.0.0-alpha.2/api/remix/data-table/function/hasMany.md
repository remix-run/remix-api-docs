---
title: hasMany
---

# hasMany

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/table.ts#L482" target="_blank">View Source</a>

## Summary

Defines a one-to-many relation from `source` to `target`.

## Signature

```ts
function hasMany(
  source: source,
  target: target,
  relationOptions: HasManyOptions<source, target>,
): Relation<source, target, "many">;

```

## Params

### source

### target

### relationOptions

Relation key configuration.

## Returns

A relation descriptor.