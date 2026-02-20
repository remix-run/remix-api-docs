---
title: bigint
---

# bigint

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-schema/src/lib/coerce.ts#L121" target="_blank">View Source</a>

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