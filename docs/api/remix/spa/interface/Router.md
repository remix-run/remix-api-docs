---
title: Router
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.1/packages/spa/src/lib/spa.ts#L36
---

# Router

## Summary

Minimal router contract used by [`run`](/api/remix/spa/function/run/).

## Signature

```ts
interface Router {
  fetch(input: string | URL | Request, init: RequestInit): Promise<Response>
}

```