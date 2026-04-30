---
title: RefCallback
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/mixins/ref-mixin.ts#L7
---

# RefCallback

## Summary

Callback invoked with the bound node and a lifetime signal.

## Signature

```ts
type RefCallback<node> = (node: node, signal: AbortSignal) => void;

```