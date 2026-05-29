---
title: MixinFactory
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/ui/src/runtime/mixins/mixin.ts#L133
---

# MixinFactory

## Signature

```ts
type MixinFactory<node, args, props> = (
  args: RebindTuple<args, node, boundNode>,
) => MixinDescriptor<boundNode, RebindTuple<args, node, boundNode>, props>;

```