---
title: attrs
---

# attrs

## Summary

Applies default host props unless the element already provides them explicitly.

## Signature

```ts
function attrs<node extends EventTarget, defaults extends ElementProps>(
  defaults: Partial<defaults>,
): MixinDescriptor<node, [Partial<ElementProps>], ElementProps>;

```

## Returns

A mixin descriptor that provides default host props.