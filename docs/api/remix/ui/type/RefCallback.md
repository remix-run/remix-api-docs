---
title: RefCallback
---

# RefCallback

## Summary

Callback invoked with the bound node and a lifetime signal.

## Signature

```ts
type RefCallback<node> = (node: node, signal: AbortSignal) => void;

```