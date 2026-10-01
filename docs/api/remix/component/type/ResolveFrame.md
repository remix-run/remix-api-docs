---
title: "ResolveFrame"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/frame.ts#L116"
---

# ResolveFrame

## Summary

Resolves content for a browser-loaded frame.

Only return trusted application content. Remix does not sanitize HTML strings, streams, or
response bodies before parsing and reconciling them into the current document. Frame HTML can
select client-entry modules and contribute import maps, styles, and nested frames.

## Signature

```ts
type ResolveFrame = (
  src: string,
  options?: ResolveFrameOptions,
) => Promise<FrameResolution> | FrameResolution

```