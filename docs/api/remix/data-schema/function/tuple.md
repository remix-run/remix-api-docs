---
title: tuple
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L935
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
  { [index in string | number | symbol]: InferOutput<items[index<index>]> }
>;

```

## Returns

A schema that produces a typed tuple