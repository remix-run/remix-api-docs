---
title: emitServerReady
source: https://github.com/remix-run/remix/blob/main/packages/node-hmr/src/runtime.ts#L32
---

# emitServerReady

## Summary

Notifies the `node-hmr` parent that this child process is ready to serve requests.

Call this after the app server starts listening. After a restart, `node-hmr` waits for this
signal before publishing the browser `server:update` event, preventing clients from refreshing
against a server that is not ready yet.

## Signature

```ts
const emitServerReady: NodeHmrRuntimeApi["emitServerReady"]
```