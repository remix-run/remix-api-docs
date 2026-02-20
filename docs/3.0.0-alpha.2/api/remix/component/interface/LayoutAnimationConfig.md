---
title: LayoutAnimationConfig
---

# LayoutAnimationConfig

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/component/src/lib/dom.ts#L82" target="_blank">View Source</a>

## Summary

Layout animation configuration for FLIP-based position animations.
All properties are optional - defaults are applied when `true` or `{}` is used.

## Signature

```ts
interface LayoutAnimationConfig {
  duration?: number;
  easing?: string;
}

```

## Properties

### duration

Animation duration in milliseconds (default: 200)

### easing

CSS easing function (default: spring 'snappy' easing)