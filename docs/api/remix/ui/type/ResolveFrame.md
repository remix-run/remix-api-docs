---
title: ResolveFrame
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/frame.ts#L69
---

# ResolveFrame

## Summary

Resolves content for a browser-loaded frame.

## Signature

```ts
type ResolveFrame = (
  src: string,
  signal?: AbortSignal,
  target?: string,
) => Promise<FrameContent> | FrameContent

```