---
title: ContextEntry
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L38
---

# ContextEntry

## Summary

A request-context entry provided by middleware. The optional `property` field installs the value
as a direct request-context property when the middleware sets the value.

## Signature

```ts
interface ContextEntry<key, value> {
  key: key;
  property?: string;
  value: value;
}

```

## Properties

### `key`

The context key that stores the value.

### `property`

Optional direct property name installed on the request context.

### `value`

The value type stored for the context key.