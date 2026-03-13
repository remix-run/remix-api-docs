---
title: animateEntrance
---

# animateEntrance

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/mixins/animate-mixins.tsx#L268" target="_blank">View Source</a>

## Summary

Animates an element when it is inserted into the DOM.

## Signature

```ts
function animateEntrance<target extends EventTarget>(
  config: AnimationConfig,
): MixinDescriptor<target, [AnimationConfig], ElementProps>;

```

## Params

### config

Entrance animation configuration.

## Returns

A mixin descriptor for the target element.