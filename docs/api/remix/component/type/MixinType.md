---
title: "MixinType"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/mixins/mixin.ts#L189"
---

# MixinType

## Summary

Setup function called once per mixin slot with its handle and host tag name.

The returned render function receives the factory arguments followed by current host props.
Return `handle.element` to preserve props, JSX using `handle.element` to patch them, or mixin
descriptors to compose more behavior. Returning nothing from setup preserves the host props.

## Signature

```ts
type MixinType<node, args, props> = (
  handle: MixinHandle<node, props>,
  type: string,
) => ((args: [...args, currentProps: props]) => MixinReturn<node, props>) | void

```