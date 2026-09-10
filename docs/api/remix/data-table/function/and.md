---
title: and
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/operators.ts#L303
---

# and

## Summary

Combines where inputs with logical `AND`.

## Signature

```ts
function and<inputs extends WhereInput<string>[]>(
  inputs: inputs,
): Predicate<WhereInputColumn<inputs[number]>>

```

## Returns

A logical `and` predicate.