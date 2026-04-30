---
title: createRoot
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/vdom.ts#L172
---

# createRoot

## Summary

Creates a virtual root for a host container element.

## Signature

```ts
function createRoot(
  container: HTMLElement,
  options: VirtualRootOptions,
): VirtualRoot;

```

## Params

### `container`

Host element to render into.

### `options`

Root configuration.

## Returns

A virtual root controller.