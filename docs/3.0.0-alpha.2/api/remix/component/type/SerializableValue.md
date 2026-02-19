---
title: SerializableValue
---

# SerializableValue

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/client-entries.ts#L24" target="_blank">View Source</a>

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