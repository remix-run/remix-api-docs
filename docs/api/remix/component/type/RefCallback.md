---
title: RefCallback
---

# RefCallback

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/mixins/ref-mixin.tsx#L7" target="_blank">View Source</a>

## Summary

Callback invoked with the bound node and a lifetime signal.

## Signature

```ts
type RefCallback<node> = (node: node, signal: AbortSignal) => void;

```