---
title: "ResolveFrameOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/frame.ts#L125"
---

# ResolveFrameOptions

## Summary

Information available while resolving browser-loaded frame content.

## Signature

```ts
interface ResolveFrameOptions {
  encType?: string
  formData?: FormData
  method?: string
  signal?: AbortSignal
  target?: string
}

```

## Properties

### `encType`

Body encoding selected by the reload options or the form and its submitter.

### `formData`

Form values submitted to the frame source for a POST reload or navigation.

### `method`

HTTP method selected by the reload options or the form and its submitter.

### `signal`

Cancels the active frame request. Custom resolvers should forward this to `fetch()`.

### `target`

Frame name, absent for both the top-level document and unnamed `<Frame>` loads.