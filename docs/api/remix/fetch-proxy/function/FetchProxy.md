---
title: FetchProxy
---

# FetchProxy

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-proxy/src/lib/fetch-proxy.ts#L44" target="_blank">View Source</a>

## Summary

## Signature

```ts
interface FetchProxy {
  (input: RequestInfo | URL, init: RequestInit): Promise<Response>;
}

```

## Params

### input

The URL or request to forward

### init

Optional request init options

## Returns

A promise that resolves to the proxied response