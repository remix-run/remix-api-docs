---
title: "AnchorPoint"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/ui/src/anchor.ts#L33"
---

# AnchorPoint

## Summary

Viewport coordinates used as an anchor instead of an element.

## Signature

```ts
interface AnchorPoint {
  height?: number
  width?: number
  x: number
  y: number
}

```

## Properties

### `height`

Anchor rectangle height in pixels (defaults to `0`).

### `width`

Anchor rectangle width in pixels (defaults to `0`).

### `x`

Horizontal position in viewport pixels, such as `PointerEvent.clientX`.

### `y`

Vertical position in viewport pixels, such as `PointerEvent.clientY`.