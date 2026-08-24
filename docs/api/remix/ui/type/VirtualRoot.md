---
title: VirtualRoot
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/ui/src/runtime/vdom.ts#L30
---

# VirtualRoot

## Summary

Root controller returned by [`createRoot`](/api/remix/ui/function/createRoot/) and [`createRangeRoot`](/api/remix/ui/function/createRangeRoot/).

## Signature

```ts
type VirtualRoot = TypedEventTarget<VirtualRootEventMap> & {
  dispose: () => void
  flush: () => void
  reconcile: () => void
  render: (element: RemixNode) => void
}

```