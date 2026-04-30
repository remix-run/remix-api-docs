---
title: SerializableProps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/client-entries.ts#L33
---

# SerializableProps

## Summary

Constraint that ensures all properties in an object are serializable.

## Signature

```ts
type SerializableProps = { [K in string]: SerializableValue };

```