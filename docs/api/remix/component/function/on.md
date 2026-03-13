---
title: on
---

# on

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/mixins/on-mixin.tsx#L73" target="_blank">View Source</a>

## Summary

Attaches a typed DOM event handler through the mixin system.

## Signature

```ts
function on<target extends Element, type extends keyof ElementEventMap>(
  type: type,
  handler: ListenerFor<target, type>,
  captureBoolean: boolean,
): MixinDescriptor<
  target,
  [type, ListenerFor<target, type>, boolean?],
  ElementProps
>;

```

## Params

### type

### handler

Event handler.

### captureBoolean

Whether to listen during capture.

## Returns

A mixin descriptor for the target element.