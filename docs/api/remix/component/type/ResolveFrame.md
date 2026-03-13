---
title: ResolveFrame
---

# ResolveFrame

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/component/src/lib/frame.ts#L49" target="_blank">View Source</a>

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