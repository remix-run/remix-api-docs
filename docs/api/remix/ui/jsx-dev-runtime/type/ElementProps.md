---
title: ElementProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/jsx.ts#L16
---

# ElementProps

## Summary

Generic bag of props passed to elements/components.
Consumers should define specific prop types on their components; this is the
renderer's normalized shape used throughout reconciler/SSR code.

## Signature

```ts
type ElementProps = Record<string, any>;

```