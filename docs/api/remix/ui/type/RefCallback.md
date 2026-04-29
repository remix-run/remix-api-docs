---
title: RefCallback
---

# RefCallback

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/runtime/mixins/ref-mixin.ts#L7" target="_blank">View Source</a>

## Summary

Callback invoked with the bound node and a lifetime signal.

## Signature

```ts
type RefCallback<node> = (node: node, signal: AbortSignal) => void;

```