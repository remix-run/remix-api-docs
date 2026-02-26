---
title: AcceptEncodingInit
---

# AcceptEncodingInit

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/accept-encoding.ts#L8" target="_blank">View Source</a>

## Summary

Initializer for an `Accept-Encoding` header value.

## Signature

```ts
type AcceptEncodingInit =
  | Iterable<string | [string, number]>
  | Record<string, number>;

```