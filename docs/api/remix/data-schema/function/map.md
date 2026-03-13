---
title: map
---

# map

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-schema/src/lib/schema.ts#L529" target="_blank">View Source</a>

## Summary

Create a schema that validates a Map with typed keys and values.

## Signature

```ts
function map<keyInput, keyOutput, valueInput, valueOutput>(
  keySchema: Schema<keyInput, keyOutput>,
  valueSchema: Schema<valueInput, valueOutput>,
): Schema<unknown, Map<keyOutput, valueOutput>>;

```

## Params

### keySchema

Schema for Map keys

### valueSchema

Schema for Map values

## Returns

A schema that produces a `Map<keyOutput, valueOutput>`