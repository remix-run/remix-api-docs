---
title: MixinDescriptor
---

# MixinDescriptor

## Summary

Serializable descriptor stored in the `mix` prop.

## Signature

```ts
type MixinDescriptor<node, args, props> = {
  __node?: (node: node) => void;
  args: args;
  type: MixinRuntimeType<args, node, props>;
};

```