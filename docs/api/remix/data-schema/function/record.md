---
title: record
---

# record

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-schema/src/lib/schema.ts#L732" target="_blank">View Source</a>

## Summary

Create a schema that validates a record (object map) by validating each key and value.

## Signature

```ts
function record(
  keySchema: Schema<keyInput, keyOutput>,
  valueSchema: Schema<valueInput, valueOutput>,
): Schema<unknown, Record<keyOutput, valueOutput>>;

```

## Params

### keySchema

Schema used to validate and transform each key

### valueSchema

Schema used to validate and transform each value

## Returns

A schema that produces a record of validated keys and values