---
title: SerializableValue
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/client-entries.ts#L24
---

# SerializableValue

## Summary

All serializable values that can be passed as props to entry components.
This includes primitives, objects, arrays, and Remix Elements.

## Signature

```ts
type SerializableValue =
  | SerializablePrimitive
  | SerializableObject
  | SerializableArray
  | RemixNode;

```