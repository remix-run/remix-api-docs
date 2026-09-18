---
title: MixinDescriptor
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/ui/src/runtime/mixins/mixin.ts#L136
---

# MixinDescriptor

## Summary

Serializable descriptor stored in the `mix` prop.

## Signature

```ts
type MixinDescriptor<node, args, props> = {
  __node?: (node: node) => void
  args: args
  type: MixinDescriptorType<args, node, props>
}

```