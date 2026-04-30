---
title: ResolveFrame
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/frame.ts#L49
---

# ResolveFrame

## Summary

Resolves frame content for the given frame source.

## Signature

```ts
type ResolveFrame = (
  src: string,
  signal?: AbortSignal,
  target?: string,
) => Promise<FrameContent> | FrameContent;

```