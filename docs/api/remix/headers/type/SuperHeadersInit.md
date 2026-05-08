---
title: SuperHeadersInit
source: https://github.com/remix-run/remix/blob/main/packages/headers/src/lib/super-headers.ts#L116
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