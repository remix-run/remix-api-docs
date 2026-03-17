---
title: createMixin
---

# createMixin

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/component/src/lib/mixin.ts#L209" target="_blank">View Source</a>

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

## Params

### type

Mixin setup function.

## Returns

A function that captures mixin arguments and returns a descriptor.