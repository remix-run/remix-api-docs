---
title: RequestOptions
---

# RequestOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/node-fetch-server/src/lib/request-listener.ts#L119" target="_blank">View Source</a>

## Summary

Options for creating a `Request` from a Node.js incoming message.

## Signature

```ts
type RequestOptions = Omit<RequestListenerOptions, "onError">;

```