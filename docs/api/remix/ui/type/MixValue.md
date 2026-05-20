---
title: MixValue
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