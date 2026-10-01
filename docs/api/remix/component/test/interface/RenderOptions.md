---
title: "RenderOptions"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/render.ts#L7"
---

# RenderOptions

## Summary

Options for [`render`](/api/remix/component/test/function/render/).

## Signature

```ts
interface RenderOptions {
  container?: HTMLElement
  frame?: FrameHandle
  frameInit?: {
    loadModule?: (moduleUrl: string, exportName: string) => Function | Promise<Function>
    resolveFrame: ResolveFrame
    src?: string
  }
  getContext?: (type: ElementFunction) => unknown
  scheduler?: Scheduler
  styleManager?: StyleManager
}

```

## Properties

### `container`

The element to mount the component into. Defaults to a fresh `div` appended to
`document.body`.

### `frame`

Existing frame runtime to share with this root instead of creating one from `frameInit`.

### `frameInit`

Frame resolution for standalone roots that render `<Frame>` without calling `run()`.

### `getContext`

Resolves context from outside this root when no matching provider exists inside it.

### `scheduler`

Scheduler to share with related roots (defaults to a new scheduler).

### `styleManager`

Style manager used to adopt server styles and manage generated CSS.