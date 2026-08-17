---
title: MixinDescriptor
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/ui/src/runtime/mixins/mixin.ts#L125
---

# MixinDescriptor

## Summary

Serializable descriptor stored in the `mix` prop.

## Signature

```ts
type MixinDescriptor<node, args, props> = {
  __node?: (node: node) => void
  args: args
  type: MixinRuntimeType<args, node, props>
}

```