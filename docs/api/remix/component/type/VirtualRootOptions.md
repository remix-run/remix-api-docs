---
title: VirtualRootOptions
---

# VirtualRootOptions

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/vdom.ts#L37" target="_blank">View Source</a>

## Summary

Options for creating a virtual DOM root with createRoot or createRangeRoot.

## Signature

```ts
type VirtualRootOptions = {
  frame?: FrameHandle;
  frameInit?: {
    loadModule?: (
      moduleUrl: string,
      exportName: string,
    ) => Promise<Function> | Function;
    resolveFrame: (
      src: string,
      signal?: AbortSignal,
      target?: string,
    ) => Promise<FrameContent> | FrameContent;
    src?: string;
  };
  scheduler?: Scheduler;
  styleManager?: StyleManager;
};

```