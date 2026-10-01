---
title: "MenuContextTriggerOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/ui/src/menu.tsx#L66"
---

# MenuContextTriggerOptions

## Summary

Placement and offsets used by [`anchor`](/api/@remix-run/ui/anchor/function/anchor/).

## Signature

```ts
interface MenuContextTriggerOptions {
  inset?: boolean
  offset?: AnchorOffsetValue
  offsetX?: AnchorOffsetValue
  offsetY?: AnchorOffsetValue
  placement?: ExtendedAnchorPlacement
  relativeTo?: string
}

```

## Properties

### `inset`

Align inside the anchor's edge instead of outside it (defaults to `false`).

### `offset`

Distance in pixels along the placement axis, or a callback computing it (defaults to `0`).

### `offsetX`

Additional horizontal offset in pixels, or a callback computing it (defaults to `0`).

### `offsetY`

Additional vertical offset in pixels, or a callback computing it (defaults to `0`).

### `placement`

Preferred side and alignment, flipped when that improves viewport fit (defaults to `'bottom'`).

### `relativeTo`

Selector for a descendant of the floating element to align against the anchor.