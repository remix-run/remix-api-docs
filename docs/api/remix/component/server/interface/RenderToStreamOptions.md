---
title: RenderToStreamOptions
---

# RenderToStreamOptions

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/stream.ts#L22" target="_blank">View Source</a>

## Summary

Options for server-side rendering to a byte stream.

## Signature

```ts
interface RenderToStreamOptions {
  frameSrc?: string | URL;
  onError?: (error: unknown) => void;
  resolveFrame?: (
    src: string,
    target?: string,
    context?: ResolveFrameContext,
  ) =>
    | string
    | ReadableStream<Uint8Array<ArrayBufferLike>>
    | Promise<string | ReadableStream<Uint8Array<ArrayBufferLike>>>;
  topFrameSrc?: string | URL;
}

```

## Properties

### frameSrc

Source URL to associate with the current frame render.

### onError

Error hook invoked when rendering work throws.

### resolveFrame

Callback used to resolve nested frame content during streaming SSR.

### topFrameSrc

Source URL for the top-level frame in nested frame renders.