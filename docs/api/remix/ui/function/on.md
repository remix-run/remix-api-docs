---
title: on
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/ui/src/runtime/mixins/on-mixin.ts#L82
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