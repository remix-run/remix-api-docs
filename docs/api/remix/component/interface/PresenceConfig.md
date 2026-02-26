---
title: PresenceConfig
---

# PresenceConfig

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/dom.ts#L64" target="_blank">View Source</a>

## Summary

Full presence configuration with multiple keyframes.
Use for complex multi-step animations.

## Signature

```ts
interface PresenceConfig {
  composite?: CompositeOperationOrAuto;
  delay?: number;
  duration: number;
  easing?: string;
  keyframes: PresenceKeyframe[];
}

```

## Properties

### composite

How animated values combine with underlying values

### delay

Delay before animation starts in milliseconds

### duration

Animation duration in milliseconds

### easing

Easing function for the animation

### keyframes

Array of keyframes defining the animation sequence