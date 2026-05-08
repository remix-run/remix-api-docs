---
title: ref
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/mixins/ref-mixin.ts#L12
---

# ref

## Summary

Calls a callback when an element is inserted and aborts it when removed.

## Signature

```ts
const ref: <boundNode extends Element>(
  args: [callback: (args: [node: boundNode, signal: AbortSignal]) => void],
) => MixinDescriptor<
  boundNode,
  [callback: (args: [node: boundNode, signal: AbortSignal]) => void],
  ElementProps
>;

```