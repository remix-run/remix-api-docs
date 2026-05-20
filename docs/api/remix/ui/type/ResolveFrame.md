---
title: ResolveFrame
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
) => Promise<FrameContent> | FrameContent;

```