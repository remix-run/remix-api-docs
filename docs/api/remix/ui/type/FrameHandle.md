---
title: FrameHandle
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/ui/src/runtime/component.ts#L163
---

# FrameHandle

## Summary

Public API for interacting with a frame instance.

## Signature

```ts
type FrameHandle = TypedEventTarget<FrameHandleEventMap> & {
  $runtime?: unknown
  src: string
  reload: any
  replace: any
}

```