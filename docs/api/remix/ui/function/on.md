---
title: on
---

# on

## Summary

Attaches a typed DOM event handler through the mixin system.

## Signature

```ts
function on<target extends Element, type extends string>(
  type: type,
  handler: ListenerFor<target, type>,
  captureBoolean: boolean,
): MixinDescriptor<
  target,
  [type, ListenerFor<target, type>, boolean?],
  ElementProps
>;

```

## Parameters

### `type`

### `handler`

Event handler.

### `captureBoolean`

Whether to listen during capture.

## Returns

A mixin descriptor for the target element.