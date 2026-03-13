---
title: MixinDescriptor
---

# MixinDescriptor

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/mixin.ts#L115" target="_blank">View Source</a>

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