---
title: FrameHandle
---

# FrameHandle

## Summary

Public API for interacting with a frame instance.

## Signature

```ts
type FrameHandle = TypedEventTarget<FrameHandleEventMap> & {
  $runtime?: unknown;
  src: string;
  reload: any;
  replace: any;
};

```