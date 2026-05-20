---
title: animateExit
---

# animateExit

## Summary

Animates an element when it is removed from the DOM.

## Signature

```ts
function animateExit<target extends EventTarget>(
  config: AnimationConfig,
): MixinDescriptor<target, [AnimationConfig], ElementProps>;

```

## Parameters

### `config`

Exit animation configuration.

## Returns

A mixin descriptor for the target element.