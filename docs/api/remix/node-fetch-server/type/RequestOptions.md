---
title: RequestOptions
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/node-fetch-server/src/lib/request-listener.ts#L380
---

# RequestOptions

## Summary

Options for creating a `Request` from a Node.js incoming message.

## Signature

```ts
type RequestOptions = Omit<RequestListenerOptions, 'onError'>

```