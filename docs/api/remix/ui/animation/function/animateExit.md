---
title: animateExit
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/animation/animate-mixins.ts#L284
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