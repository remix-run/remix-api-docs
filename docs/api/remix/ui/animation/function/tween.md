---
title: tween
---

# tween

## Summary

Generator that tweens a value over time using a cubic bezier curve.
Yields the current value on each frame. Use the iterator's `done` property
to check if the animation is complete.

## Signature

```ts
function tween(options: TweenOptions): Generator<number, number, number>;

```

## Parameters

### `options`

The tween configuration

## Returns

The final value