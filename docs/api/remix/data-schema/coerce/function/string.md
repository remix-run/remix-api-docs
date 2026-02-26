---
title: string
---

# string

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/coerce.ts#L170" target="_blank">View Source</a>

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