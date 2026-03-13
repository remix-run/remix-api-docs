---
title: set
---

# set

<a href="https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L826" target="_blank">View Source</a>

## Summary

Create a schema that validates a Set with typed values.

## Signature

```ts
function set<valueInput, valueOutput>(
  valueSchema: Schema<valueInput, valueOutput>,
): Schema<unknown, Set<valueOutput>>;

```

## Params

### valueSchema

Schema for Set values

## Returns

A schema that produces a `Set<valueOutput>`