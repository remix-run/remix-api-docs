---
title: createMixin
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/mixins/mixin.ts#L243
---

# createMixin

## Summary

Creates a typed mixin factory that can be passed through the `mix` prop.

## Signature

```ts
function createMixin<
  node extends EventTarget,
  args extends unknown[],
  props extends ElementProps,
>(
  type: MixinType<node, args, props>,
): (
  args: RebindTuple<args, node, boundNode>,
) => MixinDescriptor<boundNode, RebindTuple<args, node, boundNode>, props>;

```

## Parameters

### `type`

Mixin setup function.

## Returns

A function that captures mixin arguments and returns a descriptor.