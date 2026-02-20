---
title: boolean
---

# boolean

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-schema/src/lib/coerce.ts#L54" target="_blank">View Source</a>

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