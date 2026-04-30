---
title: string
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/coerce.ts#L170
---

# string

## Summary

Coerce input into a string.

Accepts:
- `string` values as-is
- primitive values that can be stringified (`number`, `boolean`, `bigint`, `symbol`)

## Signature

```ts
function string(): Schema<unknown, string>;

```

## Returns

A schema that produces a `string`