---
title: "anchor"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/ui/src/anchor.ts#L716"
---

# anchor

## Summary

Positions a floating element against a target and tracks geometry, scroll, and resize changes.

Updates inline positioning and size constraints, and records the chosen side in
`data-anchor-placement`. Call the returned cleanup function when the surface closes or unmounts.
Cleanup stops tracking but leaves the last applied styles and placement attribute in place.

## Signature

```ts
function anchor(
  floating: HTMLElement,
  anchorTarget: AnchorTarget,
  options: AnchorOptions,
): () => void

```

## Parameters

### `floating`

Element to position.

### `anchorTarget`

Anchor element or viewport coordinates.

### `options`

Placement, alignment, and offsets.

## Returns

Cleanup function that stops polling and removes scroll and resize listeners.