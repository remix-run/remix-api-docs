---
title: set
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

## Parameters

### `valueSchema`

Schema for Set values

## Returns

A schema that produces a `Set<valueOutput>`