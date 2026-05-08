---
title: instanceof_
source: https://github.com/remix-run/remix/blob/main/packages/data-schema/src/lib/schema.ts#L505
---

# instanceof_

## Summary

Create a schema that validates a value is an instance of a class.

## Signature

```ts
function instanceof_<constructor extends (args: any[]) => any>(
  constructor: constructor,
): Schema<unknown, InstanceType<constructor>>;

```

## Returns

A schema that produces the instance type