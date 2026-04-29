---
title: MixinHandle
---

# MixinHandle

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/runtime/mixins/mixin.ts#L78" target="_blank">View Source</a>

## Summary

Runtime handle passed to mixin setup functions.

Mixin render callbacks receive host props with `children` and `innerHTML` removed.
Returned mixin elements may patch host attributes and nested `mix`, but cannot replace
the host subtree.

## Signature

```ts
type MixinHandle<node, props> = TypedEventTarget<MixinHandleEventMap<node>> & {
  context: MixinContext;
  element: MixinElement<node, props>;
  frame: FrameHandle;
  id: string;
  signal: AbortSignal;
  queueTask: any;
  update: any;
};

```