---
title: FrameHandle
---

# FrameHandle

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/component/src/lib/component.ts#L142" target="_blank">View Source</a>

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