---
title: SuperHeadersInit
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/headers/src/lib/super-headers.ts#L116
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