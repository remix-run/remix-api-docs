---
title: FrameHandle
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/component.ts#L147
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