---
title: animateExit
---

# animateExit

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/mixins/animate-mixins.tsx#L284" target="_blank">View Source</a>

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