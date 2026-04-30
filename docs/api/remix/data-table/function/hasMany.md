---
title: hasMany
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L827
---

# hasMany

## Summary

Defines a one-to-many relation from `source` to `target`.

## Signature

```ts
function hasMany<source extends AnyTable, target extends AnyTable>(
  source: source,
  target: target,
  relationOptions: HasManyOptions<source, target>,
): Relation<source, target, "many">;

```

## Params

### `source`

### `target`

### `relationOptions`

Relation key configuration.

## Returns

A relation descriptor.