---
title: MixinDescriptor
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/mixins/mixin.ts#L123
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