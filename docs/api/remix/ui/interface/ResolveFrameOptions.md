---
title: ResolveFrameOptions
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/frame.ts#L85
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

Form encoding selected by the form and its submitter.

### `formData`

Form values submitted to the frame source for a non-GET submission.

### `method`

HTTP method selected by the form and its submitter.

### `signal`

Aborts the reload when the navigation that started it is cancelled.

### `target`

Optional name of the frame being loaded or reloaded.