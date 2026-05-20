---
title: link
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