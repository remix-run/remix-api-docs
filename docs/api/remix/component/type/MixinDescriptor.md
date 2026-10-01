---
title: "MixinDescriptor"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/mixins/mixin.ts#L201"
---

# MixinDescriptor

## Summary

Descriptor pairing a mixin setup function with the arguments captured by its factory.

## Signature

```ts
type MixinDescriptor<node, args, props> = {
  __node?: (node: node) => void
  args: args
  type: MixinDescriptorType<args, node, props>
}

```