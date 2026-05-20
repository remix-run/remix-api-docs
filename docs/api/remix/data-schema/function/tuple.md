---
title: tuple
---

# tuple

## Summary

Create a schema that validates a fixed-length tuple.

## Signature

```ts
function tuple<items extends Schema<any, any>[]>(
  items: items,
): Schema<
  unknown,
  { [index in string | number | symbol]: InferOutput<items[index]> }
>;

```

## Returns

A schema that produces a typed tuple