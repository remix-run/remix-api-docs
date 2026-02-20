---
title: hasOne
---

# hasOne

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/table.ts#L516" target="_blank">View Source</a>

## Summary

Defines a one-to-one relation from `source` to `target` where the foreign key lives on `target`.

## Signature

```ts
function hasOne(
  source: source,
  target: target,
  relationOptions: HasOneOptions<source, target>,
): Relation<source, target, "one">;

```

## Params

### source

### target

### relationOptions

Relation key configuration.

## Returns

A relation descriptor.