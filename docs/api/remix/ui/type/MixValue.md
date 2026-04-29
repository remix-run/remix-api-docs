---
title: MixValue
---

# MixValue

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/runtime/mixins/mixin.ts#L153" target="_blank">View Source</a>

## Summary

Accepted value shape for the `mix` prop.

## Signature

```ts
type MixValue<node, props> =
  | MixinDescriptor<node, any, props>
  | ReadonlyArray<MixinDescriptor<node, any, props>>;

```