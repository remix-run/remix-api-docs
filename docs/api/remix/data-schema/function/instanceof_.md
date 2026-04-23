---
title: instanceof_
---

# instanceof_

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-schema/src/lib/schema.ts#L484" target="_blank">View Source</a>

## Summary

Create a schema that validates a value is an instance of a class.

## Signature

```ts
function instanceof_<constructor extends (args: any[]) => any>(
  constructor: constructor,
): Schema<unknown, InstanceType<constructor>>;

```

## Params

### constructor

## Returns

A schema that produces the instance type