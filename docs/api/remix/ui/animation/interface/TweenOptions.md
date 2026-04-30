---
title: TweenOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/animation/tween.ts#L86
---

# TweenOptions

## Summary

Options for generating tweened values over time.

## Signature

```ts
interface TweenOptions {
  curve: BezierCurve;
  duration: number;
  from: number;
  to: number;
}

```

## Properties

### curve

Cubic-bezier curve used to shape the interpolation.

### duration

Total tween duration in milliseconds.

### from

Starting value for the tween.

### to

Ending value for the tween.