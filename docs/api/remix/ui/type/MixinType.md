---
title: MixinType
---

# MixinType

## Summary

Public mixin setup function signature.

## Signature

```ts
type MixinType<node, args, props> = (
  handle: MixinHandle<node, props>,
  type: string,
) =>
  | ((args: [...args, currentProps: props]) => MixinReturn<node, props>)
  | void;

```