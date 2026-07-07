---
title: createContextKey
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L12
---

# createContextKey

## Summary

Create a request context key with an optional default value.

## Signature

```ts
function createContextKey<value>(): ContextKey<value>;

function createContextKey<value>(
  defaultValue: value,
): ContextKey<value> & { defaultValue: value };

```

## Parameters

### `defaultValue`

The default value for the context key

## Returns

The new context key