---
title: or
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.1/packages/data-table/src/lib/operators.ts#L318
---

# or

## Summary

Combines where inputs with logical `OR`.

## Signature

```ts
function or<inputs extends WhereInput<string>[]>(
  inputs: inputs,
): Predicate<WhereInputColumn<inputs[number]>>

```

## Returns

A logical `or` predicate.