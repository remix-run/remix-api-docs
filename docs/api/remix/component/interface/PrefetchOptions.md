---
title: "PrefetchOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/prefetch.ts#L6"
---

# PrefetchOptions

## Summary

Options for prefetching frame content.

## Signature

```ts
interface PrefetchOptions {
  target?: string
}

```

## Properties

### `target`

Name of the destination frame, sent as `X-Remix-Target` by the default strategy.