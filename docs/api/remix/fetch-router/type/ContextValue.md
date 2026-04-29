---
title: ContextValue
---

# ContextValue

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/fetch-router/src/lib/request-context.ts#L44" target="_blank">View Source</a>

## Summary

Resolves the value type associated with a request-context key.

## Signature

```ts
type ContextValue<key> =
  key extends ContextKey<infer value>
    ? value
    : key extends (args: any[]) => infer instance
      ? instance
      : never;

```