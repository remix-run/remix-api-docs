---
title: LayoutAnimationConfig
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/dom.ts#L17
---

# LayoutAnimationConfig

## Summary

Layout animation configuration for FLIP-based position animations.
All properties are optional - defaults are applied when `true` or `{}` is used.

## Signature

```ts
interface LayoutAnimationConfig {
  duration?: number;
  easing?: string;
  size?: boolean;
}

```

## Properties

### `duration`

Animation duration in milliseconds (default: 200)

### `easing`

CSS easing function (default: spring 'snappy' easing)

### `size`

Include scale projection for size changes (default: true)