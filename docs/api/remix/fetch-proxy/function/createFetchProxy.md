---
title: createFetchProxy
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/fetch-proxy/src/lib/fetch-proxy.ts#L58
---

# createFetchProxy

## Summary

Creates a `fetch` function that forwards requests to another server.

## Signature

```ts
function createFetchProxy(
  target: string | URL,
  options: FetchProxyOptions,
): FetchProxy;

```

## Params

### `target`

The URL of the server to proxy requests to

### `options`

Options to customize the behavior of the proxy

## Returns

A fetch function that forwards requests to the target server