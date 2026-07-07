---
title: map
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L550
---

# map

## Summary

Create a schema that validates a Map with typed keys and values.

## Signature

```ts
function map<keyInput, keyOutput, valueInput, valueOutput>(
  keySchema: Schema<keyInput, keyOutput>,
  valueSchema: Schema<valueInput, valueOutput>,
): Schema<unknown, Map<keyOutput, valueOutput>>;

```

## Parameters

### `keySchema`

Schema for Map keys

### `valueSchema`

Schema for Map values

## Returns

A schema that produces a `Map<keyOutput, valueOutput>`