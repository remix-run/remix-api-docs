---
title: createFileResponse
---

# createFileResponse

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/response/src/lib/file.ts#L129" target="_blank">View Source</a>

## Summary

Creates a file [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
with full HTTP semantics including ETags, Last-Modified, conditional requests, and Range support.

Accepts both native `File` objects and
import('@remix-run/lazy-file').LazyFile values.

## Signature

```ts
function createFileResponse<file extends FileLike>(
  file: file,
  request: Request,
  options: FileResponseOptions<file>,
): Promise<Response>;

```

## Example

```ts
import { createFileResponse } from 'remix/response/file'
import { openLazyFile } from 'remix/fs'

let lazyFile = openLazyFile('./public/image.jpg')
return createFileResponse(lazyFile, request, {
  cacheControl: 'public, max-age=3600'
})
```

## Params

### file

### request

The request object

### options

Configuration options

## Returns

A `Response` object containing the file