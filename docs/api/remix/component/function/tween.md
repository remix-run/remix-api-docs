---
title: tween
---

# tween

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/component/src/lib/tween.ts#L88" target="_blank">View Source</a>

## Summary

Generator that tweens a value over time using a cubic bezier curve.
Yields the current value on each frame. Use the iterator's `done` property
to check if the animation is complete.

## Signature

```ts
function tween(options: TweenOptions): Generator<number, number, number>;

```

## Params

### options

The tween configuration

## Returns

The final value