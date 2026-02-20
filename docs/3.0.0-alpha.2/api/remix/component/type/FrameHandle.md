---
title: FrameHandle
---

# FrameHandle

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/component/src/lib/component.ts#L151" target="_blank">View Source</a>

## Summary

Handle for interacting with a Frame component instance.

## Signature

```ts
type FrameHandle = TypedEventTarget<FrameHandleEventMap> & {
  $runtime?: unknown;
  src: string;
  reload: any;
  replace: any;
};

```