---
title: RequestOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/node-fetch-server/src/lib/request-listener.ts#L380
---

# RequestOptions

## Summary

Options for creating a `Request` from a Node.js incoming message.

## Signature

```ts
type RequestOptions = Omit<RequestListenerOptions, 'onError'>

```