---
title: AcceptEncodingInit
source: https://github.com/remix-run/remix/blob/main/packages/headers/src/lib/accept-encoding.ts#L8
---

# AcceptEncodingInit

## Summary

Initializer for an `Accept-Encoding` header value.

## Signature

```ts
type AcceptEncodingInit =
  | Iterable<string | [string, number]>
  | Record<string, number>;

```