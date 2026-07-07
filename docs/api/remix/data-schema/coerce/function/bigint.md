---
title: bigint
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/coerce.ts#L121
---

# bigint

## Summary

Coerce input into a `bigint`.

Accepts:
- `bigint` values as-is
- integer `number` values
- integer strings parsed via `BigInt(...)`

## Signature

```ts
function bigint(): Schema<unknown, bigint>;

```

## Returns

A schema that produces a `bigint`