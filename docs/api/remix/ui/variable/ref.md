---
title: ref
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/ui/src/runtime/mixins/ref-mixin.ts#L12
---

# ref

## Summary

Calls a callback when an element is inserted and aborts it when removed.

## Signature

```ts
const ref: MixinFactory<
  Element,
  [callback: RefCallback<Element>],
  ElementProps
>;

```