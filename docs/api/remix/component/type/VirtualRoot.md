---
title: VirtualRoot
---

# VirtualRoot

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/component/src/lib/vdom.ts#L28" target="_blank">View Source</a>

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