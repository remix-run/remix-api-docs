---
title: SuperHeadersInit
---

# SuperHeadersInit

## Summary

Initializer for [`SuperHeaders`](/api/remix/headers/class/SuperHeaders/).

## Signature

```ts
type SuperHeadersInit =
  | Headers
  | Iterable<[string, string]>
  | (SuperHeadersPropertyInit & Record<string, unknown>);

```