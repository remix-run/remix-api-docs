---
title: tuple
---

# tuple

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L888" target="_blank">View Source</a>

## Summary

Create a schema that validates a fixed-length tuple.

## Signature

```ts
function tuple(
  items: items,
): Schema<
  unknown,
  { [index in string | number | symbol]: InferOutput<items[index<index>]> }
>;

```

## Params

### items

## Returns

A schema that produces a typed tuple