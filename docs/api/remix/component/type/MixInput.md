---
title: "MixInput"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/mixins/mixin.ts#L247"
---

# MixInput

## Summary

Accepted authoring shape for the `mix` prop on host elements.
Nested arrays are flattened and falsy entries are ignored, allowing conditional mixins.

## Signature

```ts
type MixInput<node, props> = NestedMixValue<MixinInputDescriptor<node, props>>

```