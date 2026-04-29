---
title: animateExit
---

# animateExit

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/animation/animate-mixins.ts#L284" target="_blank">View Source</a>

## Summary

Animates an element when it is removed from the DOM.

## Signature

```ts
function animateExit<target extends EventTarget>(
  config: AnimationConfig,
): MixinDescriptor<target, [AnimationConfig], ElementProps>;

```

## Params

### config

Exit animation configuration.

## Returns

A mixin descriptor for the target element.