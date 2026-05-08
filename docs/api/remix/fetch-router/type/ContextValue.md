---
title: ContextValue
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/request-context.ts#L47
---

# ContextValue

## Summary

Resolves the value type associated with a request-context key.

## Signature

```ts
type ContextValue<key> =
  key extends ContextKey<infer value>
    ? value
    : key extends { prototype: infer instance }
      ? instance
      : never;

```