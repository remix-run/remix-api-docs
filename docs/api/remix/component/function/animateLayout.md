---
title: animateLayout
---

# animateLayout

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/mixins/animate-layout-mixin.ts#L258" target="_blank">View Source</a>

## Summary

Animates layout changes for an element using FLIP-style transforms.

## Signature

```ts
function animateLayout<target extends EventTarget>(
  config: LayoutConfig,
): MixinDescriptor<target, [LayoutConfig?], ElementProps>;

```

## Params

### config

Layout animation configuration.

## Returns

A mixin descriptor for the target element.