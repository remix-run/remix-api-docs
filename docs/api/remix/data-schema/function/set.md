---
title: set
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-schema/src/lib/schema.ts#L847
---

# set

## Summary

Create a schema that validates a Set with typed values.

## Signature

```ts
function set<valueInput, valueOutput>(
  valueSchema: Schema<valueInput, valueOutput>,
): Schema<unknown, Set<valueOutput>>;

```

## Params

### `valueSchema`

Schema for Set values

## Returns

A schema that produces a `Set<valueOutput>`