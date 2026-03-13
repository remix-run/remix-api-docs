---
title: MixinType
---

# MixinType

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/mixin.ts#L99" target="_blank">View Source</a>

## Summary

Public mixin setup function signature.

## Signature

```ts
type MixinType<node, args, props> = (
  handle: MixinHandle<node, props>,
  type: string,
) =>
  | ((
      args: [...args, currentProps: props],
    ) => void | null | RemixElement | MixinElement<node, props>)
  | void;

```