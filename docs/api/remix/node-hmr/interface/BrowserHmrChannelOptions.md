---
title: BrowserHmrChannelOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/node-hmr/src/index.ts#L30
---

# BrowserHmrChannelOptions

## Summary

Browser HMR event stream options hosted by the parent process.

## Signature

```ts
interface BrowserHmrChannelOptions {
  host?: string
  pathname?: string
  port?: number
}

```

## Properties

### `host`

Hostname for the browser HMR event server. (`'127.0.0.1'`)

### `pathname`

URL pathname for the browser HMR event stream. (`'/hmr'`)

### `port`

Port for the browser HMR event server. Uses an available ephemeral port when omitted.