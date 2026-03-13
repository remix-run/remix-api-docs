---
title: createContextKey
---

# createContextKey

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/fetch-router/src/lib/request-context.ts#L11" target="_blank">View Source</a>

## Summary

Create a request context key with an optional default value.

## Signature

```ts
function createContextKey<value>(defaultValue: value): ContextKey<value>;

```

## Params

### defaultValue

The default value for the context key

## Returns

The new context key