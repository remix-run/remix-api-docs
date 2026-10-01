---
title: "VirtualRoot"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/vdom.ts#L32"
---

# VirtualRoot

## Summary

Root controller returned by [`createRoot`](/api/remix/component/function/createRoot/) and [`createRangeRoot`](/api/remix/component/function/createRangeRoot/).

## Signature

```ts
type VirtualRoot = TypedEventTarget<VirtualRootEventMap> & {
  dispose: () => void
  flush: () => void
  reconcile: () => void
  render: (element: RemixNode) => void
}

```