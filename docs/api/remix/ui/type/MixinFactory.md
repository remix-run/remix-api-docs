---
title: MixinFactory
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/mixins/mixin.ts#L135
---

# MixinFactory

## Signature

```ts
type MixinFactory<node, args, props> = (
  args: RebindTuple<args, node, boundNode>,
) => MixinDescriptor<boundNode, RebindTuple<args, node, boundNode>, props>

```