---
title: literal
---

# literal

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L481" target="_blank">View Source</a>

## Summary

Create a schema that accepts a single literal value using strict equality (`===`).

## Signature

```ts
function literal(literalValue: value): Schema<unknown, value>;

```

## Params

### literalValue

The literal value to match

## Returns

A schema that produces the literal type