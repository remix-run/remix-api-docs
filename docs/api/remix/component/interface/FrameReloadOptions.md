---
title: "FrameReloadOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/component.ts#L195"
---

# FrameReloadOptions

## Summary

Options for reloading a frame's source.

## Signature

```ts
interface FrameReloadOptions {
  body?: FormData
  encType?: string
  method?: string
  src?: string
}

```

## Properties

### `body`

Form values to submit. GET encodes them into the source query instead of a request body.

### `encType`

Form encoding: `application/x-www-form-urlencoded` (default), `multipart/form-data`,
or `text/plain`. Case-insensitive; invalid values use the default. Ignored for GET.

### `method`

Form request method: `GET` or `POST`, case-insensitive. Other values default to `GET`.

### `src`

Source to reload and retain for subsequent reloads. Defaults to the current source.