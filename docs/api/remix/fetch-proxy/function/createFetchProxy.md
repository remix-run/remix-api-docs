---
title: createFetchProxy
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

## Parameters

### `target`

The URL of the server to proxy requests to

### `options`

Options to customize the behavior of the proxy

## Returns

A fetch function that forwards requests to the target server