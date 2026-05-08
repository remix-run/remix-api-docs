---
title: baseStyle
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/components/button/button.tsx#L103
---

# baseStyle

## Summary

Base button styling with the default `type="button"` behavior for `<button>`
hosts. Compose with a tone style (e.g. [`primaryStyle`](/api/remix/ui/button/mixin/primaryStyle/)) when applying
button styling without using the [`Button`](/api/remix/ui/button/function/Button/) component.

## Signature

```ts
const baseStyle: readonly [
  MixinDescriptor<Element, [], ElementProps>,
  CSSMixinDescriptor,
];

```