---
title: attrs
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/mixins/attrs-mixin.ts#L26
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

## Params

### `defaults`

## Returns

A mixin descriptor that provides default host props.