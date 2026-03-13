---
title: hasManyThrough
---

# hasManyThrough

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L929" target="_blank">View Source</a>

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

## Params

### source

### target

### relationOptions

Through relation configuration.

## Returns

A relation descriptor.