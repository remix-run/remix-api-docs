---
title: animateEntrance
---

# animateEntrance

## Summary

Animates an element when it is inserted into the DOM.

## Signature

```ts
function animateEntrance<target extends EventTarget>(
  config: AnimationConfig,
): MixinDescriptor<target, [AnimationConfig], ElementProps>;

```

## Parameters

### `config`

Entrance animation configuration.

## Returns

A mixin descriptor for the target element.