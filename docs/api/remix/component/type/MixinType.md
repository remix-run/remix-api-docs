---
title: MixinType
---

# MixinType

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/mixin.ts#L111" target="_blank">View Source</a>

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