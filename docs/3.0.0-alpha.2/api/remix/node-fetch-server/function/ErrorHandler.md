---
title: ErrorHandler
---

# ErrorHandler

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/node-fetch-server/src/lib/fetch-handler.ts#L35" target="_blank">View Source</a>

## Summary

## Signature

```ts
interface ErrorHandler {
  (error: unknown): void | Response | Promise<void | Response>;
}

```

## Params

### error

The error that was thrown

## Returns

A response to send to the client, or `undefined` for the default error response