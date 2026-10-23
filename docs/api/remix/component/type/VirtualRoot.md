---
title: "VirtualRoot"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/vdom.ts#L32"
---

# VirtualRoot

## Summary

Root controller returned by [`createRoot`](/component/function/createRoot/) and [`createRangeRoot`](/component/function/createRangeRoot/).

## Signature

```ts
type VirtualRoot = TypedEventTarget<VirtualRootEventMap> & {
  dispose: () => void
  flush: () => void
  reconcile: () => void
  render: (element: RemixNode) => void
}

```