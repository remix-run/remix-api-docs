---
title: MixinHandle
---

# MixinHandle

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/component/src/lib/mixin.ts#L71" target="_blank">View Source</a>

## Summary

Runtime handle passed to mixin setup functions.

## Signature

```ts
type MixinHandle<node, props> = TypedEventTarget<MixinHandleEventMap<node>> & {
  element: MixinElement<node, props>;
  frame: FrameHandle;
  id: string;
  signal: AbortSignal;
  queueTask: any;
  update: any;
};

```