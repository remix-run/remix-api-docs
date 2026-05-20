---
title: ref
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