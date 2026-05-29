---
title: ResolveFrame
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/ui/src/runtime/frame.ts#L69
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