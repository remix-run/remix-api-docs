---
title: "MixinFactory"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/mixins/mixin.ts#L217"
---

# MixinFactory

## Summary

Callable factory that captures arguments for a mixin used in a host's `mix` prop.

## Signature

```ts
type MixinFactory<node, args, props> = (
  args: RebindTuple<args, node, boundNode>,
) => MixinDescriptor<boundNode, RebindTuple<args, node, boundNode>, props>

```