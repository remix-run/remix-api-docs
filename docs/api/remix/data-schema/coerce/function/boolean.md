---
title: boolean
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/coerce.ts#L54
---

# boolean

## Summary

Coerce input into a boolean.

Accepts:
- `boolean` values as-is
- strings `"true"` and `"false"` (case-insensitive, trimmed)

## Signature

```ts
function boolean(): Schema<unknown, boolean>;

```

## Returns

A schema that produces a `boolean`