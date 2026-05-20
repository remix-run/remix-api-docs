---
title: css
---

# css

## Summary

Applies generated class names for CSS object styles.

## Signature

```ts
const css: <boundNode extends Element>(
  args: [styles: CSSProps],
) => MixinDescriptor<boundNode, [styles: CSSProps], ElementProps>;

```