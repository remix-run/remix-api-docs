---
title: FetchProxy
---

# FetchProxy

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/fetch-proxy/src/lib/fetch-proxy.ts#L47" target="_blank">View Source</a>

## Summary

Forwards a request to the configured proxy target.

## Signature

```ts
interface FetchProxy {
  (input: RequestInfo | URL, init: RequestInit): Promise<Response>;
}

```