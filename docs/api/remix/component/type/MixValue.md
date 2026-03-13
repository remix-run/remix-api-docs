---
title: MixValue
---

# MixValue

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/mixin.ts#L128" target="_blank">View Source</a>

## Summary

Accepted value shape for the `mix` prop.

## Signature

```ts
type MixValue<node, props> =
  | MixinDescriptor<node, any, props>
  | ReadonlyArray<MixinDescriptor<node, any, props>>;

```