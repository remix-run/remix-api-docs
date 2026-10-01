---
title: "VirtualRootOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/vdom.ts#L54"
---

# VirtualRootOptions

## Summary

Options for creating a virtual DOM root with [`createRoot`](/api/remix/component/function/createRoot/) or [`createRangeRoot`](/api/remix/component/function/createRangeRoot/).

## Signature

```ts
type VirtualRootOptions = {
  frame?: FrameHandle
  frameInit?: {
    loadModule?: (moduleUrl: string, exportName: string) => Promise<Function> | Function
    resolveFrame: ResolveFrame
    src?: string
  }
  getContext?: (type: ElementFunction) => unknown
  scheduler?: Scheduler
  styleManager?: StyleManager
}

```