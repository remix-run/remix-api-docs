---
title: FetchProxy
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/fetch-proxy/src/lib/fetch-proxy.ts#L48
---

# FetchProxy

## Summary

Forwards a request to the configured proxy target.

## Signature

```ts
interface FetchProxy {
  (input: RequestInfo | URL, init: RequestInit): Promise<Response>;
}

```