---
title: MixValue
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/mixins/mixin.ts#L153
---

# MixValue

## Summary

Accepted value shape for the `mix` prop.

## Signature

```ts
type MixValue<node, props> =
  | MixinDescriptor<node, any, props>
  | ReadonlyArray<MixinDescriptor<node, any, props>>;

```