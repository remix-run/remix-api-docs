---
title: MixValue
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/mixins/mixin.ts#L182
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