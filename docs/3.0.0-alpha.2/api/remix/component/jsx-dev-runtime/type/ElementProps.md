---
title: ElementProps
---

# ElementProps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/jsx.ts#L16" target="_blank">View Source</a>

## Summary

Generic bag of props passed to elements/components.
Consumers should define specific prop types on their components; this is the
renderer's normalized shape used throughout reconciler/SSR code.

## Signature

```ts
type ElementProps = Record<string, any>;

```