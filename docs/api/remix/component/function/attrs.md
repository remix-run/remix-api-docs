---
title: attrs
---

# attrs

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/mixins/attrs-mixin.tsx#L26" target="_blank">View Source</a>

## Summary

Applies default host props unless the element already provides them explicitly.

## Signature

```ts
function attrs<node extends EventTarget, defaults extends ElementProps>(
  defaults: Partial<defaults>,
): MixinDescriptor<node, [Partial<ElementProps>], ElementProps>;

```

## Params

### defaults

## Returns

A mixin descriptor that provides default host props.