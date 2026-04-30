---
title: AcceptEncodingInit
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/headers/src/lib/accept-encoding.ts#L8
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