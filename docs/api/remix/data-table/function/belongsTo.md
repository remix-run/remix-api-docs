---
title: belongsTo
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L895
---

# belongsTo

## Summary

Defines a one-to-one relation from `source` to `target`.

## Signature

```ts
function belongsTo<source extends AnyTable, target extends AnyTable>(
  source: source,
  target: target,
  relationOptions: BelongsToOptions<source, target>,
): Relation<source, target, "one">;

```

## Params

### `source`

### `target`

### `relationOptions`

Relation key configuration.

## Returns

A relation descriptor.