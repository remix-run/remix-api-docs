---
title: ResolveFrameContext
---

# ResolveFrameContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/server/stream.ts#L47" target="_blank">View Source</a>

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