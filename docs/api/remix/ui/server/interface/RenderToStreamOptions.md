---
title: RenderToStreamOptions
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/server/stream.ts#L28
---

# RenderToStreamOptions

## Summary

Options for server-side rendering to a byte stream.

## Signature

```ts
interface RenderToStreamOptions {
  frameSrc?: string | URL;
  onError?: (error: unknown) => void;
  resolveClientEntry?: (
    entryId: string,
    component: EntryComponent,
  ) => ResolvedClientEntry | Promise<ResolvedClientEntry>;
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

### `frameSrc`

Source URL to associate with the current frame render.

### `onError`

Error hook invoked when rendering work throws.

### `resolveClientEntry`

Callback used to resolve runtime module metadata for client entry modules during SSR.

### `resolveFrame`

Callback used to resolve nested frame content during streaming SSR.

### `topFrameSrc`

Source URL for the top-level frame in nested frame renders.