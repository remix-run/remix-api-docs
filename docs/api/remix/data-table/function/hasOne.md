---
title: hasOne
---

# hasOne

## Summary

Defines a one-to-one relation from `source` to `target` where the foreign key lives on `target`.

## Signature

```ts
function hasOne<source extends AnyTable, target extends AnyTable>(
  source: source,
  target: target,
  relationOptions: HasOneOptions<source, target>,
): Relation<source, target, "one">;

```

## Parameters

### `source`

### `target`

### `relationOptions`

Relation key configuration.

## Returns

A relation descriptor.