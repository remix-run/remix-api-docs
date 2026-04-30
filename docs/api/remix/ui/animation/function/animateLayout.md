---
title: animateLayout
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/animation/animate-layout-mixin.ts#L258
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

## Params

### `config`

Layout animation configuration.

## Returns

A mixin descriptor for the target element.