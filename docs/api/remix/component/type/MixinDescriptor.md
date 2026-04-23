---
title: MixinDescriptor
---

# MixinDescriptor

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/mixin.ts#L123" target="_blank">View Source</a>

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