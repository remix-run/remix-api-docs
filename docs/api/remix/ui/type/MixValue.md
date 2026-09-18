---
title: MixValue
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/ui/src/runtime/mixins/mixin.ts#L183
---

# MixValue

## Summary

Accepted value shape for the `mix` prop.

## Signature

```ts
type MixValue<node, props> =
  | MixinInputDescriptor<node, props>
  | ReadonlyArray<MixinInputDescriptor<node, props>>

```