---
title: FetchProxy
source: https://github.com/remix-run/remix/blob/main/packages/fetch-proxy/src/lib/fetch-proxy.ts#L48
---

# FetchProxy

## Summary

Forwards a request to the configured proxy target.

## Signature

```ts
interface FetchProxy {
  (input: URL | RequestInfo, init: RequestInit): Promise<Response>;
}

```