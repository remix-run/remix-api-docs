---
title: animateLayout
---

# animateLayout

## Summary

Animates layout changes for an element using FLIP-style transforms.

## Signature

```ts
function animateLayout<target extends EventTarget>(
  config: LayoutConfig,
): MixinDescriptor<target, [LayoutConfig?], ElementProps>;

```

## Parameters

### `config`

Layout animation configuration.

## Returns

A mixin descriptor for the target element.