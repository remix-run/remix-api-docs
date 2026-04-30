---
title: animateEntrance
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/animation/animate-mixins.ts#L268
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

## Params

### `config`

Entrance animation configuration.

## Returns

A mixin descriptor for the target element.