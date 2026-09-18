---
title: FrameContent
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/ui/src/runtime/component.ts#L148
---

# FrameContent

## Summary

Content that can be rendered into a frame.

HTML strings and streams must contain trusted application content. Remix does not sanitize them
before parsing and reconciling them into the current document.

## Signature

```ts
type FrameContent = ReadableStream<Uint8Array> | string | RemixNode

```