---
title: VirtualRoot
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/vdom.ts#L28
---

# VirtualRoot

## Summary

Root controller returned by createRoot and createRangeRoot.

## Signature

```ts
type VirtualRoot = TypedEventTarget<VirtualRootEventMap> & {
  dispose: () => void;
  flush: () => void;
  render: (element: RemixNode) => void;
};

```