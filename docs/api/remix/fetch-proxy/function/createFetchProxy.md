---
title: createFetchProxy
---

# createFetchProxy

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/fetch-proxy/src/lib/fetch-proxy.ts#L54" target="_blank">View Source</a>

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

### target

The URL of the server to proxy requests to

### options

Options to customize the behavior of the proxy

## Returns

A fetch function that forwards requests to the target server