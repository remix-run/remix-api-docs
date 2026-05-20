---
title: VirtualRoot
---

# VirtualRoot

## Summary

Root controller returned by [`createRoot`](/api/remix/ui/function/createRoot/) and [`createRangeRoot`](/api/remix/ui/function/createRangeRoot/).

## Signature

```ts
type VirtualRoot = TypedEventTarget<VirtualRootEventMap> & {
  dispose: () => void;
  flush: () => void;
  render: (element: RemixNode) => void;
};

```