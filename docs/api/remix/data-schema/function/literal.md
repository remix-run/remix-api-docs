---
title: literal
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L528
---

# literal

## Summary

Create a schema that accepts a single literal value using strict equality (`===`).

## Signature

```ts
function literal<value>(literalValue: value): Schema<unknown, value>;

```

## Parameters

### `literalValue`

The literal value to match

## Returns

A schema that produces the literal type