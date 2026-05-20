---
title: FetchProxy
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