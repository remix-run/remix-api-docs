---
title: RequestOptions
source: https://github.com/remix-run/remix/blob/main/packages/node-fetch-server/src/lib/request-listener.ts#L179
---

# RequestOptions

## Summary

Options for creating a `Request` from a Node.js incoming message.

## Signature

```ts
type RequestOptions = Omit<RequestListenerOptions, "onError">;

```