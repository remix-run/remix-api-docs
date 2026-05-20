---
title: instanceof_
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