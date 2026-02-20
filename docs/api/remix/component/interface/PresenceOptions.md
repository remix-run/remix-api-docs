---
title: PresenceOptions
---

# PresenceOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/dom.ts#L49" target="_blank">View Source</a>

## Summary

Timing and playback options for presence animations.

## Signature

```ts
interface PresenceOptions {
  composite?: CompositeOperationOrAuto;
  delay?: number;
  duration: number;
  easing?: string;
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