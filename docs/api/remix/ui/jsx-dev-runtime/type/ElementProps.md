---
title: ElementProps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/ui/src/runtime/jsx.ts#L17
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