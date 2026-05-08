---
title: link
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/mixins/link-mixin.ts#L24
---

# link

## Summary

Adds client-side navigation behavior to anchor-like elements.

## Signature

```ts
const link: <boundNode extends HTMLElement>(
  args: [href: string, options?: NavigationOptions],
) => MixinDescriptor<
  boundNode,
  [href: string, options?: NavigationOptions],
  LinkCurrentProps
>;

```