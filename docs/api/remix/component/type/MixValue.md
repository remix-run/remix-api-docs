---
title: "MixValue"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/mixins/mixin.ts#L255"
---

# MixValue

## Summary

Descriptor or flat descriptor array after nested and conditional mixin inputs are normalized.

## Signature

```ts
type MixValue<node, props> =
  | MixinInputDescriptor<node, props>
  | ReadonlyArray<MixinInputDescriptor<node, props>>

```