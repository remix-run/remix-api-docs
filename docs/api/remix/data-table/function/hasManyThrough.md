---
title: hasManyThrough
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L929
---

# hasManyThrough

## Summary

Defines a one-to-many relation from `source` to `target` through an intermediate relation.

## Signature

```ts
function hasManyThrough<source extends AnyTable, target extends AnyTable>(
  source: source,
  target: target,
  relationOptions: HasManyThroughOptions<source, target>,
): Relation<source, target, "many">;

```

## Parameters

### `source`

### `target`

### `relationOptions`

Through relation configuration.

## Returns

A relation descriptor.