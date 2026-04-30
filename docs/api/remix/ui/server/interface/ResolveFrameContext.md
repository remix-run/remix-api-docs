---
title: ResolveFrameContext
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/server/stream.ts#L47
---

# ResolveFrameContext

## Summary

Context passed to `resolveFrame` during server rendering.

## Signature

```ts
interface ResolveFrameContext {
  currentFrameSrc: string;
  topFrameSrc: string;
}

```

## Properties

### currentFrameSrc

Source URL for the frame currently being resolved.

### topFrameSrc

Source URL for the top-level frame in the current render.