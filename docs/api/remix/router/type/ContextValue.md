---
title: ContextValue
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