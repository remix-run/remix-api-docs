---
title: RenderOptions
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/render.ts#L7
---

# RenderOptions

## Summary

Options for [`render`](/api/remix/ui/test/function/render/).

## Signature

```ts
interface RenderOptions {
  container?: HTMLElement;
  frame?: FrameHandle;
  frameInit?: {
    loadModule?: (
      moduleUrl: string,
      exportName: string,
    ) => Function | Promise<Function>;
    resolveFrame: (
      src: string,
      signal?: AbortSignal,
      target?: string,
    ) => FrameContent | Promise<FrameContent>;
    src?: string;
  };
  scheduler?: Scheduler;
  styleManager?: StyleManager;
}

```

## Properties

### `container`

The element to mount the component into. Defaults to a fresh `div` appended to
`document.body`.

### `frame`

### `frameInit`

### `scheduler`

### `styleManager`